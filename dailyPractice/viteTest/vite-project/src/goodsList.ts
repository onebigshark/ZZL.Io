import './goodsList.css';
import axios from 'axios';

interface resType{
  code: number;
  list:Array<listType>;
}
type listType=  {
  category: string;
  current_price: string;
  goods_id: number;
  goods_number: string;
  img_big_logo: string;
  is_hot:boolean;
  is_sale: boolean;
  message: string;
  price: string;
  sale_type: string;
  title: string;
};

axios({
  url: 'http://localhost:8888/admin/goods',
  method: 'get',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: localStorage.getItem('token'),
  },
}).then((r) => {
  let data:resType|any=r.data.list;
  for (const k of data) {
    document.querySelector<HTMLUListElement>('#box')!.innerHTML += `
  <ul class="goods">
  <li>${k.category}</li>
  <li>${k.current_price}</li>
  <li><img src="${k.img_big_logo}" alt=""></li>
  <li><div class="title">${k.title}</div></li>
</ul>
`;
  }
});