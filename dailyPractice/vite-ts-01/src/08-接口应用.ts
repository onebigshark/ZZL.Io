// 1-安装axios模块
// pnpm i axios
// 2-引入axios模块
import axios from 'axios';

interface IRes {
  code: number;
  list: Array<IList>;
}

interface IList {
  goods_id: number,
  title: string,
  img_big_logo: string,
  price: string,
  current_price: string,
  goods_number: string,
  is_sale: boolean,
  sale_type: string,
  is_hot: boolean,
  category: string,
  message: string

}

axios({

}).then((r) => {
  console.log(r.data);
  //   r.data.code;
  //   r.data.list;
  //描述服务器返回的对象的类型
  let obj: IRes = r.data;
  // console.log(obj.code);
  obj.list[1].current_price;
});
