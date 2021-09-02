import React from 'react'
import { Uploader, FileItem } from './uploader'
import Button from '@/packages/button'

const UploaderDemo = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const formData = {
    custom: 'test',
  }
  const fileToDataURL = (file: Blob): Promise<any> => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = (e) => resolve((e.target as FileReader).result)
      reader.readAsDataURL(file)
    })
  }
  const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.src = dataURL
    })
  }
  const canvastoFile = (
    canvas: HTMLCanvasElement,
    type: string,
    quality: number
  ): Promise<Blob | null> => {
    return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), type, quality))
  }
  const onOversize = (files: File[]) => {
    console.log('oversize 触发 文件大小不能超过 50kb', files)
  }
  const onStart = () => {
    console.log('start 触发')
  }
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log('delete 事件触发', file, fileList)
  }
  const beforeUpload = async (files: File[]) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const base64 = await fileToDataURL(files[0])
    const img = await dataURLToImage(base64)
    canvas.width = img.width
    canvas.height = img.height
    context.clearRect(0, 0, img.width, img.height)
    context.drawImage(img, 0, 0, img.width, img.height)
    let blob = (await canvastoFile(canvas, 'image/jpeg', 0.5)) as Blob //quality:0.5可根据实际情况计算
    const f = await new File([blob], files[0].name, { type: files[0].type })
    return [f]
  }
  return (
    <>
      <div className="demo bg-w">
        <h2>基础用法</h2>
        <Uploader url={uploadUrl} start={onStart}></Uploader>
        <h2>自定义上传样式</h2>
        <Uploader url={uploadUrl}>
          <Button type="primary" icon="uploader">
            上传文件
          </Button>
        </Uploader>
        <h2>直接调起摄像头（移动端生效）</h2>
        <Uploader capture></Uploader>
        <h2>上传状态</h2>
        <Uploader url={uploadUrl} multiple removeImage={onDelete}></Uploader>
        <h2>限制上传数量5个</h2>
        <Uploader url={uploadUrl} multiple maximum="5"></Uploader>
        <h2>限制上传大小（每个文件最大不超过 50kb）</h2>
        <Uploader url={uploadUrl} multiple maximize={1024 * 50} oversize={onOversize}></Uploader>
        <h2>限制上传大小（在beforeupload钩子中处理）</h2>
        <Uploader
          url={uploadUrl}
          multiple
          beforeUpload={beforeUpload}
          maximize={1024 * 50}
          oversize={onOversize}
        ></Uploader>
        <h2>自定义数据 FormData 、 headers </h2>
        <Uploader
          url={uploadUrl}
          data={formData}
          headers={formData}
          withCredentials={true}
        ></Uploader>
        <h2>禁用状态</h2>
        <Uploader disabled></Uploader>
      </div>
    </>
  )
}

export default UploaderDemo
