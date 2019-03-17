---
layout: post
title: "Làm thế nào đăng hình cho bài viết định dạng markdown với gist"
date: 2019-01-24 18:15:30 +0700
timeRead: "3 minute read"
tags: blog github github-page guide hướng-dẫn
categories: [github, guide]
---

>Giới hạn lưu trữ miễn phí của GitHub Pages là 1GB.\\
>Bài viết định dạng markdown chỉ cho phép chèn ảnh chỉ với link trực tiếp.

Example:
``![I love markDown](https://user-images.githubusercontent.com/11416513/52113202-45f32780-263b-11e9-9190-1ef8cfeb538f.jpg)``

![I love markDown](https://user-images.githubusercontent.com/11416513/52113202-45f32780-263b-11e9-9190-1ef8cfeb538f.jpg 'I love markdown')

Bạn có thể lựa chọn nhiều host khác nhau để lưu trữ nội dung hình ảnh và sử dụng URL được cung cấp.

Và những gì tôi chia sẽ dưới đây chỉ là 1 phương án nhanh và tiện để thay thế cho những cách trên (cho tới hiện tại).

Bạn sẽ tạo 1 chủ đề/bài viết trên gist[^1] và tận dụng chức năng comment của gist để upload hình ảnh và sử dụng chúng.

## Các bước thực hiện
**1) Bước đầu tiên: Tạo 1 chủ đề gist.**
   ![create a gist](https://user-images.githubusercontent.com/11416513/52113816-f7df2380-263c-11e9-9df6-8a36f97c8832.jpg 'create a gist')

**2) Upload hình ảnh thông qua chức năng comment.**

     Kéo và thả hình ảnh của bạn vào ô comment.
     Hình ảnh này sẽ được tự động đưa lên server của github.

![uploading image](https://user-images.githubusercontent.com/11416513/52112131-358d7d80-2638-11e9-9c8b-8c1e645180cf.png 'uploading image')
 
**3) Sử dụng kết quả đường dẫn đã được upload thành công**

    Sau khi đã upload thành công thì hệ thống sẽ trả về cho các bạn 1 đường link hoàn chỉnh.
    Bạn có thể sử dụng đường link này chèn vào bài viết của mình rồi.

![uploaded image](https://user-images.githubusercontent.com/11416513/52112130-358d7d80-2638-11e9-8768-58a7af3dae62.png 'uploaded image')

**4) Sử dụng đường link nhận được trong bài viết của bạn và tận hưởng thành quả nào!**  
    ![result post with image](https://user-images.githubusercontent.com/11416513/52114482-bf404980-263e-11e9-9738-f585c9a6dd27.jpg)

## Kết luận
- Trên chỉ là 1 phương án tôi tìm được khi tìm kiếm một nơi để lưu trữ những hình ảnh minh họa cho bài viết của mình. Và với google thần chưởng :) tôi đã tìm được một hướng dẫn cũng ngay trên gist nên mạn phép dịch và trình bày bằng tiếng Việt để tiện cho các bạn tra cứu cũng như tham khảo.
- Tham khảo nội dung từ: [Adding Images to markdown files in Gist.markdown of Kannankumar](https://gist.github.com/kannankumar/4c613cac6d9db896062a16e1cc57d3e5)

---
[^1]: gist là 1 dịch vụ của github dùng để tạo và chia sẽ các đoạn code mẫu (https://gist.github.com/)