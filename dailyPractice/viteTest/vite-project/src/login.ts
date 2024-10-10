import './login.css';
import axios from 'axios';


document.querySelector<HTMLDivElement>('#outer')!.innerHTML = `
  <div></div>
  <div>账号:<input type="text" class="account"></div>
  <div>密码:<input type="text" class="password"></div>
  <div><button class="login">登录</button></div>
  <div></div>
  <div class="footer"><a href="register.html">遇到问题</a>&ensp;|&ensp;<a href="register.html">注册</a></div>
`;

let login = document.getElementsByClassName('login')[0];
login.addEventListener('click', () => {
  let username: string | null = (document.getElementsByClassName('account')[0]as HTMLInputElement).value;
  let password: string | number = (document.getElementsByClassName('password')[0]as HTMLInputElement).value;
  if (username == null || username == '') {
    alert('请输入用户名！');
    return false;
  }
  if (password == '') {
    alert('请输入密码！');
    return false;
  }
  axios({
    url: 'http://localhost:8888/users/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      username: username,
      password: password,
    },
  }).then((r) => {
    localStorage.setItem("token",r.data.token );
    (document.getElementsByClassName('account')[0] as HTMLInputElement).value = '';
    (document.getElementsByClassName('password')[0]as HTMLInputElement).value = '';
    alert('登录成功！');
    setTimeout(() => {
      window.location.href = '../goodsList.html';
    }, 3000);
  }).catch((r) => {
    alert('登录失败！' + r.status);
  });
});
