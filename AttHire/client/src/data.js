import axios from "axios";
export const sliderItems =[
  {
      id: 1,
      img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title:"Shop With Atthire",
      desc:"THE WAIT IS OVER A BEAUTIFUL BLEND OF DESIGN AND TECHNOLOGY IN EVERY STEP OF YOU RUNNING",
      bg:"f5f5f5",
  },
  {
      id: 2,
      img: "https://images.pexels.com/photos/12992109/pexels-photo-12992109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title:"Be a part of Atthire",
      desc:"A STYLE FOR EVERY STORY",
      bg:"f5f5f5",
  },
  {
      id: 3,
      img: "https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title:"Passion for fashion",
      desc:"SHOP ALOT, SPEND A LITTLE",
      bg:"f5f5f5",
  }
]

export const categories = [
  {
      id: 1,
      img: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title:"MALE",
      cat:"Male",
  },
  {
      id: 2,
      img: "https://images.pexels.com/photos/5885995/pexels-photo-5885995.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title:"FEMALE",
      cat:"Female",
  },
  {
      id: 3,
      img: "https://images.pexels.com/photos/3771639/pexels-photo-3771639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title:"KIDS",
      cat:"Kids",
  }
]


export const sliderClick = (slider)=>{
  alert("Hello World");
}
export const slides= [
  {image:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/532275/06/fnd/IND/fmt/png/RUDOLF-DASSLER-LEGACY-Men',title:"this is a First title",description:"this is a First description", clickEvent:sliderClick},
  {image:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/535992/88/fnd/IND/fmt/png/PUMA-x-AMI-T-Shirt',title:"this is a Second title",description:"this is a Second description",clickEvent:sliderClick},
  {image:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af75ebf0-5f07-4c50-af56-fe551bbdb8b6/dunk-high-retro-mens-shoe-dTVTCk.png',title:"this is a Third title",description:"this is a Third description",clickEvent:sliderClick},
  {image:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/621393/01/fnd/IND/fmt/png/Rebound-Hoops-Men',title:"this is a Fourth title",description:"this is a Fourth description",clickEvent:sliderClick},
  {image:'https://image.spreadshirtmedia.com/image-server/v1/productTypes/812/views/1/appearances/2,width=650,height=800,backgroundColor=f2f2f2.png',title:"this is a Fifth title",description:"this is a Fifth description",clickEvent:sliderClick},
  {image:'https://image.spreadshirtmedia.com/image-server/v1/productTypes/2094/views/1/appearances/1,width=650,height=800,backgroundColor=f2f2f2.png',title:"this is a Sixth title",description:"this is a Sixth description",clickEvent:sliderClick},
]

export const PopularProducts = [
  {
      id: 1,
      img: "https://www.prada.com/content/dam/pradabkg_products/1/1D2/1D246M/055F0002/1D246M_055_F0002_F_085_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
  },
  {
      id: 2,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UMR/UMR524/11I0F0002/UMR524_11I0_F0002_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 3,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UGN/UGN194/11GYF0002/UGN194_11GY_F0002_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 4,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UMB/UMB419/11IOF0002/UMB419_11IO_F0002_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 5,
      img: "https://www.prada.com/content/dam/pradabkg_products/2/2TG/2TG207/070F0002/2TG207_070_F0002_F_G001_SLS.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 6,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UMB/UMB419/11IOF0012/UMB419_11IO_F0012_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 7,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UMB/UMB431/11QXF0491/UMB431_11QX_F0491_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 8,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UMR/UMR526/11IOF0008/UMR526_11IO_F0008_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 9,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1643823903/615044_XJD2V_2597_001_100_0000_Light.jpg",
  },
  {
      id: 10,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UMB/UMB431/11QXF0491/UMB431_11QX_F0491_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 11,
      img: "https://www.prada.com/content/dam/pradabkg_products/U/UMR/UMR526/11IOF0008/UMR526_11IO_F0008_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.800.1000.webp",
  },
  {
      id: 12,
      img: "https://media.gucci.com/style/DarkGray_South_0_160_316x316/1643823903/615044_XJD2V_2597_001_100_0000_Light.jpg",
  }
]
