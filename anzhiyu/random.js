var posts=["2023/10/31/Java-Juc/","2023/10/31/Netty/","2023/10/28/Picgo和GitHub搭建的问题/","2023/10/28/java实现文件上传和文件下载/","2023/11/08/docker的nginx配置/","2023/11/06/linux/","2023/11/07/linux-ftp设置/","2023/11/06/webcomponent/","2023/11/06/mysql/","2023/11/06/websocket遇到的问题/","2023/10/30/远程mysql连接不上/","2023/10/28/跨域请求解决-nginx服务器/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};