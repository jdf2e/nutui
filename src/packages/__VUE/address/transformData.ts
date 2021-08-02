import pinyin from 'pinyin';

interface Region {
  title: string;
  list: any[];
}

export const transformData = (regionData: any[]) => {
  if (!Array.isArray(regionData)) throw new TypeError('params muse be array.');

  if (!regionData.length) return [];

  const newData: Region[] = [];

  regionData = regionData.map((item: any) => {
    if (!item.name) return new Error('the data must includes `name` props');
    let code = pinyin(item.name, {
      style: pinyin.STYLE_NORMAL
    });
    return {
      ...item,
      firstCode: code[0][0].charAt(0).toUpperCase()
    };
  });

  regionData = regionData.sort((a: any, b: any) => {
    return a.firstCode.localeCompare(b.firstCode);
  });

  regionData.forEach((item: any) => {
    const index = newData.findIndex(
      (value: any) => value.title === item.firstCode
    );
    if (index <= -1) {
      newData.push({
        title: item.firstCode,
        list: [].concat(item)
      });
    } else {
      newData[index] = {
        title: item.firstCode,
        list: newData[index].list.concat(item)
      };
    }
  });

  return newData;
};
