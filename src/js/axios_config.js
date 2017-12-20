// 导入axios, 进行默认域名配置与开启跨域请求传送证书, 然后导出配置后的axios
import axios from 'axios';
import { domain } from './api_config.js';

axios.defaults.baseURL = domain;
// axios进行跨域请求的时候允许携带cookie信息
axios.defaults.withCredentials = true;

export default axios;
