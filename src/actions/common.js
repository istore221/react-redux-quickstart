import {APP_LOAD,GET_POSTS,GET_COMMENTS} from '../constants/common';
import {BlogAgent} from '../agent/agents';

export const onload = () => ({ type: APP_LOAD });
export const getPosts = () => ( { type: GET_POSTS,payload:BlogAgent.posts()});
export const getComments = () => ( { type: GET_COMMENTS,payload:BlogAgent.comments()});
