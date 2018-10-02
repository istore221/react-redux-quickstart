import {API_ENDPOINT} from '../constants/common';
import getAxios from '../globals/axios';


export const BlogAgent = {
  posts: () => getAxios().get('/posts'),
  comments: () => getAxios().get('/comments')
};
