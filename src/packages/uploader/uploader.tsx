import React, { useState, FunctionComponent } from 'react'
import Icon from '@/packages/icon'
import { Upload, UploadOptions } from './upload'
import classNames from 'classnames'
import bem from '@/utils/bem'
import './uploader.scss'

export interface UploaderProps {
  url: string
  maximum: string | number
  maximize: number
  uploadIcon: string
  name: string
  accept: string
  disabled: boolean
  multiple: boolean
  timeout: number
  data: object
  method: string
  xhrState: number | string
  headers: object
  withCredentials: boolean
  clearInput: boolean
  isPreview: boolean
  isDeletable: boolean
  capture: boolean
  className: string
  style: React.CSSProperties
  start?: (option: UploadOptions) => void
  removeImage?: (file: FileItem, fileList: FileItem[]) => void
  success?: (param: { responseText: XMLHttpRequest['responseText']; option: UploadOptions }) => void
  progress?: (param: { e: ProgressEvent<XMLHttpRequestEventTarget>; option: UploadOptions }) => void
  failure?: (param: { responseText: XMLHttpRequest['responseText']; option: UploadOptions }) => void
  update?: (fileList: any[]) => void
  oversize?: (file: File[]) => void
  change?: (param: { fileList: any[]; event: React.ChangeEvent<HTMLInputElement> }) => void
  beforeUpload?: (file: File[]) => Promise<File[]>
  beforeDelete?: (file: FileItem, files: FileItem[]) => boolean
}
export type FileItemStatus = 'ready' | 'uploading' | 'success' | 'error' | 'removed'

const defaultProps = {
  url: '',
  maximum: 1,
  uploadIcon: 'photograph',
  name: 'file',
  accept: '*',
  disabled: false,
  multiple: false,
  maximize: Number.MAX_VALUE,
  data: {},
  headers: {},
  method: 'post',
  xhrState: 200,
  timeout: 1000 * 30,
  withCredentials: false,
  clearInput: false,
  isPreview: true,
  isDeletable: true,
  capture: false,
  beforeDelete: (file: FileItem, files: FileItem[]) => {
    return true
  },
} as UploaderProps
export class FileItem {
  status: FileItemStatus = 'ready'
  uid: string = new Date().getTime().toString()
  name?: string
  url?: string
  type?: string
  formData: FormData = new FormData()
}
export const Uploader: FunctionComponent<
  Partial<UploaderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    uploadIcon,
    name,
    accept,
    disabled,
    multiple,
    url,
    headers,
    timeout,
    method,
    xhrState,
    withCredentials,
    data,
    isPreview,
    isDeletable,
    maximum,
    capture,
    maximize,
    className,
    start,
    removeImage,
    progress,
    success,
    update,
    failure,
    beforeDelete,
    ...restProps
  } = { ...defaultProps, ...props }
  const [fileList, setFileList] = useState<any>([])

  const b = bem('uploader')
  const classes = classNames(className, b(''))

  const clearInput = (el: HTMLInputElement) => {
    el.value = ''
  }

  const executeUpload = (fileItem: FileItem) => {
    const uploadOption = new UploadOptions()
    uploadOption.url = url
    for (const [key, value] of Object.entries(data)) {
      fileItem.formData.append(key, value)
    }
    uploadOption.formData = fileItem.formData
    uploadOption.timeout = timeout * 1
    uploadOption.method = method
    uploadOption.xhrState = xhrState
    uploadOption.headers = headers
    uploadOption.withCredentials = withCredentials
    uploadOption.onStart = (option: UploadOptions) => {
      setFileList((fileList: FileItem[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'ready'
          }
        })
        return [...fileList]
      })
      start && start(option)
    }
    uploadOption.onProgress = (
      e: ProgressEvent<XMLHttpRequestEventTarget>,
      option: UploadOptions
    ) => {
      setFileList((fileList: FileItem[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'uploading'
          }
        })
        return [...fileList]
      })
      progress && progress({ e, option })
    }
    uploadOption.onSuccess = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      setFileList((fileList: FileItem[]) => {
        update && update(fileList)
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'success'
          }
        })
        return [...fileList]
      })
      success &&
        success({
          responseText,
          option,
        })
    }
    uploadOption.onFailure = (
      responseText: XMLHttpRequest['responseText'],
      option: UploadOptions
    ) => {
      setFileList((fileList: FileItem[]) => {
        fileList.map((item) => {
          if (item.uid === fileItem.uid) {
            item.status = 'error'
          }
        })
        return [...fileList]
      })
      failure &&
        failure({
          responseText,
          option,
        })
    }
    new Upload(uploadOption).upload()
  }

  const readFile = (files: File[]) => {
    files.forEach((file: File) => {
      const formData = new FormData()
      formData.append(name, file)
      const fileItem = new FileItem()
      fileItem.name = file.name
      fileItem.status = 'uploading'
      fileItem.type = file.type
      fileItem.formData = formData
      executeUpload(fileItem)

      if (isPreview && file.type.includes('image')) {
        const reader = new FileReader()
        reader.onload = (event: ProgressEvent<FileReader>) => {
          fileItem.url = (event.target as FileReader).result as string
          fileList.push(fileItem)
          setFileList([...fileList])
        }
        reader.readAsDataURL(file)
      } else {
        fileList.push(fileItem)
        setFileList([...fileList])
      }
    })
  }

  const filterFiles = (files: File[]) => {
    const maximum = (props.maximum as number) * 1
    const oversizes = new Array<File>()
    const filterFile = files.filter((file: File) => {
      if (file.size > maximize) {
        oversizes.push(file)
        return false
      } else {
        return true
      }
    })
    if (oversizes.length) {
      props.oversize && props.oversize(files)
    }
    if (filterFile.length > maximum) {
      filterFile.splice(maximum - 1, filterFile.length - maximum)
    }
    return filterFile
  }

  const onDelete = (file: FileItem, index: number) => {
    if (beforeDelete && beforeDelete(file, fileList)) {
      fileList.splice(index, 1)
      removeImage && removeImage(file, fileList)
      setFileList([...fileList])
    } else {
      console.log('用户阻止了删除！')
    }
  }

  const fileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return
    }
    const $el = event.target
    let { files } = $el

    if (props.beforeUpload) {
      props.beforeUpload(new Array<File>().slice.call(files)).then((f: Array<File>) => {
        const _files: File[] = filterFiles(new Array<File>().slice.call(f))
        readFile(_files)
      })
    } else {
      const _files = filterFiles(new Array<File>().slice.call(files))
      readFile(_files)
    }

    props.change && props.change({ fileList, event })

    if (props.clearInput) {
      clearInput($el)
    }
  }

  return (
    <div className={classes} {...restProps}>
      {children ? (
        <div className="nut-uploader__slot">
          {
            <>
              {children}
              {maximum > fileList.length && (
                <>
                  {capture ? (
                    <input
                      className="nut-uploader__input"
                      type="file"
                      capture="user"
                      name={name}
                      accept={accept}
                      disabled={disabled}
                      multiple={multiple}
                      onChange={fileChange}
                    />
                  ) : (
                    <input
                      className="nut-uploader__input"
                      type="file"
                      name={name}
                      accept={accept}
                      disabled={disabled}
                      multiple={multiple}
                      onChange={fileChange}
                    />
                  )}
                </>
              )}
            </>
          }
        </div>
      ) : (
        <>
          {fileList.length !== 0 &&
            fileList.map((item: any, index: number) => {
              return (
                <div className="nut-uploader__preview" key={item.uid}>
                  <div className="nut-uploader__preview-img">
                    {isDeletable && (
                      <Icon
                        color="rgba(0,0,0,0.6)"
                        className="close"
                        name="circle-close"
                        click={() => onDelete(item, index)}
                      />
                    )}
                    {item.type.includes('image') && item.url && (
                      <img className="nut-uploader__preview-img__c" src={item.url} />
                    )}
                    {item.status !== 'success' && <div className="tips">{item.status}</div>}
                  </div>
                </div>
              )
            })}
          {maximum > fileList.length && (
            <div className="nut-uploader__upload">
              <Icon color="#808080" name={uploadIcon} />
              {capture ? (
                <input
                  className="nut-uploader__input"
                  type="file"
                  capture="user"
                  name={name}
                  accept={accept}
                  disabled={disabled}
                  multiple={multiple}
                  onChange={fileChange}
                />
              ) : (
                <input
                  className="nut-uploader__input"
                  type="file"
                  name={name}
                  accept={accept}
                  disabled={disabled}
                  multiple={multiple}
                  onChange={fileChange}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

Uploader.defaultProps = defaultProps
Uploader.displayName = 'NutUploader'
