import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import Comment from '../index.vue';
import CommentData from '../comment_data.json';

test('comment init render', async () => {
  const wrapper = mount(Comment, {
    props: {
      images: CommentData.Comment.images,
      videos: CommentData.Comment.videos,
      info: CommentData.Comment.info
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-comment__main').exists()).toBeTruthy();
});

test('comment mutli images', async () => {
  const wrapper = mount(Comment, {
    props: {
      headerType: 'complex',
      imagesRows: 'multi',
      images: CommentData.Comment.images,
      videos: CommentData.Comment.videos,
      info: CommentData.Comment.info
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-comment-images__mask').exists()).toBeTruthy();
});
