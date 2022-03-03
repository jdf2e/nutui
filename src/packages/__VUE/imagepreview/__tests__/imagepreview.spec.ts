import { mount } from '@vue/test-utils';
import ImagePreview from '../index.vue';

const images = [
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png'
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg'
  },
  {
    src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg'
  }
];

const videos = [
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4'
    },
    options: {
      muted: true,
      controls: true
    }
  },
  {
    source: {
      src: 'https://storage.jd.com/about/big-final.mp4?Expires=3730193075&AccessKey=3LoYX1dQWa6ZXzQl&Signature=ViMFjz%2BOkBxS%2FY1rjtUVqbopbJI%3D',
      type: 'video/mp4'
    },
    options: {
      muted: true,
      controls: true
    }
  }
];

test('render image correctly', () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('render video correctly', () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      videos
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('has pagination', () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images,
      'pagination-visible': true
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('click event test', () => {
  const wrapper = mount(ImagePreview, {
    props: {
      show: true,
      images
    }
  });

  wrapper.trigger('click');
  expect(wrapper.html()).toMatchSnapshot();
});
