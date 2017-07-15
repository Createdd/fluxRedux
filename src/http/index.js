import { generate as id } from 'shortid';
const asyncAwaitTime = 1000;
export const get = (url, cb)=>{
    setTimeout(()=>{
        cb(id());
    },asyncAwaitTime);
}