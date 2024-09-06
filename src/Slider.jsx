// this section is for the slider to show the best memories you spent with him/ her
// go to line 125, 126, 127 to add your heading, sub-heading and a small text
// to get started go to https://bulkresizephotos.com/en and upload 12 images 
//select image dimensions and make them 800x1100 pixels for better result 
// hit start and download the file. 
// upload them on https://imgbb.com/ you can upload free images here, upload them all at once, also sign in there to generate direct links
// press dont auto dlt or change it as you want
// after uploading select direct links from embed code
// save those links
// go to line 130 and place those links one by one  on src
// src="your link goes here"
// save this file after doing so and you are good to go

import React from 'react';

const Slider = () => {
    const htmlCode=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slick Carousel with Bokeh Effect</title>
  <!-- Slick Carousel CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }

    body {
      overflow: hidden;
      background: #a2cffe;
    }

    .wrapper {
      width: 100%;
      padding-top: 20px;
      text-align: center;
      position: relative;
      z-index: 1; /* Ensure wrapper is above bokeh effect */
    }

    h1, h2 {
      color: #333333;
      margin: 0;
      padding: 0;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }

    .carousel {
      width: 60%; /* Adjusted width for smaller slider */
      margin: 0 auto;
    }

    .slick-slide {
      margin: 10px;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Smooth transitions */
    }

    .slick-slide img {
      width: 100%;
      border: 2px solid #fff;
      transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out; /* Smooth transitions for images */
    }

    /* Center slide larger and zoomed */
    .slick-center img {
      transform: scale(1.1); /* Slightly smaller scale */
      z-index: 1; /* Ensure center slide is above others */
    }

    /* Side slides smaller and reduced opacity */
    .slick-slide:not(.slick-center) img {
      transform: scale(0.7); /* Smaller scale */
      opacity: 0.5; /* Reduced opacity */
    }

    /* Hide slick dots */
    .slick-dots {
      display: none;
    }

    .bokeh {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0; /* Ensure bokeh effect is behind carousel */
    }

    .bokeh div {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      animation: move 20s linear infinite;
    }

    @keyframes move {
      from {
        transform: translateY(0) scale(1);
      }
      to {
        transform: translateY(-1000px) scale(0.5);
      }
    }
  </style>
</head>
<body>
  <div class="bokeh">
    <!-- Bokeh circles will be generated here by JavaScript -->
  </div>
  <div class="wrapper">
    <h1>Memories that Matter</h1>
    <h2>Reflecting on the Best Moments</h2>
    <p style="color: #333333; font-size: 1.2em; margin: 0 auto; width: 80%; padding-bottom:50px;">
      Every moment we've shared has been a treasure. I can't bear to lose such a wonderful friend and our priceless friendship..
    </p>
    <div class="carousel">
      <div><img src="https://i.ibb.co/6b370jM/Designer-1.jpg" alt="Image 1"></div> 
      <div><img src="https://i.ibb.co/v4NF8wX/Designer-2.jpg" alt="Image 2"></div>
      <div><img src="https://i.ibb.co/DpByRtf/Designer-3.jpg" alt="Image 3"></div>
      <div><img src="https://i.ibb.co/xXdwxsf/Designer-4.jpg" alt="Image 4"></div>
      <div><img src="https://i.ibb.co/K2dW8yd/Designer-5.jpg" alt="Image 5"></div>
      <div><img src="https://i.ibb.co/F39vxfL/Designer-6.jpg" alt="Image 6"></div>
      <div><img src="https://i.ibb.co/KGbFrH5/Designer-7.jpg" alt="Image 7"></div>
      <div><img src="https://i.ibb.co/r4fwQdk/Designer-8.jpg" alt="Image 8"></div>
      <div><img src="https://i.ibb.co/QXKNfnb/Designer-9.jpg" alt="Image 9"></div>
      <div><img src="https://i.ibb.co/7jwJFFL/Designer-10.jpg" alt="Image 10"></div>
      <div><img src="https://i.ibb.co/wsCYkZZ/Designer-11.jpg" alt="Image 11"></div>
      <div><img src="https://i.ibb.co/Nn8w7Lw/Designer-12.jpg" alt="Image 12"></div>
    </div>
  </div>

  <!-- jQuery -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <!-- Slick Carousel JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
  <script>
    $(document).ready(function(){
      $('.carousel').slick({
        slidesToShow: 3,
        dots: false, // Dots are hidden via CSS
        centerMode: true,
        centerPadding: '10px', // Adjust centerPadding for a more compact look
        focusOnSelect: true,
        speed: 800, // Adjust the speed of the slide transition
        responsive: [
          {
            breakpoint: 768, // Example breakpoint
            settings: {
              slidesToShow: 1,
              centerPadding: '10px',
            }
          }
        ]
      });
    });

    // Bokeh Effect JavaScript
    const bokehContainer = document.querySelector('.bokeh');
    const bokehCount = 50; // Number of bokeh circles

    for (let i = 0; i < bokehCount; i++) {
      const bokeh = document.createElement('div');
      const size = Math.random() * 100 + 50; // Random size between 50px and 150px
      bokeh.style.width = size + 'px';
      bokeh.style.height = size + 'px';
      bokeh.style.left = Math.random() * 100 + '%';
      bokeh.style.top = Math.random() * 100 + '%';
      bokeh.style.animationDuration = (Math.random() * 20 + 10) + 's'; // Random duration between 10s and 30s
      bokehContainer.appendChild(bokeh);
    }
  </script>
</body>
</html>




    
    `;
    return (
        <div className='Slider-container'>
          <iframe
            srcDoc={htmlCode}
            style={{
              width: '100vw',
              height: '100vh',
              border: 'none',
              overflow: 'hidden',
            }}
            title='slider'
          ></iframe>
        </div>);
};

export default Slider;