import React from "react";
import { Card, Col, Row, Avatar, Button } from "antd";
import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

//const { Meta } = Card;
import "./App.css";
export default function App() {
  let products = [
    {
      id: 1,
      title: "Chicken thika",
      desc: "famaus kabab in pakistan ",
      price: 520,
      Image:
        "https://chikoo.imgix.net/merchant-production/60d98635-3d1d-4884-8d29-d37b5230f071/product/1634888678983/1634888678983.jpg?ixlib=js-3.8.0&dpi=96&w=1000&s=eb172b1f703bab96964cd49639d632e8",
    },
    {
      id: 2,
      title: "Plain Zeera Rice",
      desc: "white rice is one of moost famaus dish order now",
      price: 520,
      Image:
        "https://chikoo.imgix.net/merchant-production/60d98635-3d1d-4884-8d29-d37b5230f071/product/1634892595234/1634892595235.jpg?ixlib=js-3.8.0&dpi=96&w=1000&s=f268526e7d9d1e072c33666a5132b603",
    },
    {
      id: 3,
      title: "Brain Masala",
      desc: "jjjjjjjj",
      price: 520,
      Image:
        "https://chikoo.imgix.net/merchant-production/60d98635-3d1d-4884-8d29-d37b5230f071/product/1634892431873/1634892431875.jpg?ixlib=js-3.8.0&dpi=96&w=1000&s=424d2e743945254ce5b8ce6b46e516b8",
    },
    {
      id: 4,
      title: "Taus Biryani Handi (Mutton)",
      desc: "Taus Biryani Handi (Mutton)",
      price: 520,
      Image:
        "https://chikoo.imgix.net/merchant-production/60d98635-3d1d-4884-8d29-d37b5230f071/product/1634892573214/1634892573214.jpg?ixlib=js-3.8.0&dpi=96&w=1000&s=fa30262d1941d7934a2f5174d68fdbd2",
    },
  ];

  return (
    <div className="container mt-5">
      {products.map((product) => (
        <Row gutter={16} key={product.id}>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              title={product.title}
              extra={<Button type="primary">Details</Button>}
              cover={<img alt="example" src={product.Image} />}
              bordered={false}
              actions={[
                <FacebookFilled style={{ color: "blue" }} />,
                <TwitterOutlined style={{ color: "skyblue" }} />,
                <InstagramOutlined style={{ color: "purple" }} />,
                <YoutubeFilled style={{ color: "red" }} />,
              ]}
            >
              <Card.Meta
                style={{
                  desplay: "flex",
                  flexDirection: "column",
                  marginTop: -60,
                }}
                avatar={
                  <Avatar
                    size={70}
                    src={
                      "https://cdn4.vectorstock.com/i/1000x1000/01/08/delicious-menu-logo-or-label-food-restaurant-vector-20630108.jpg"
                    }
                  ></Avatar>
                }
                description={product.desc}
              ></Card.Meta>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              title={product.title}
              extra={<Button type="primary">Details</Button>}
              cover={<img alt="example" src={product.Image} />}
              bordered={false}
              actions={[
                <FacebookFilled style={{ color: "blue" }} />,
                <TwitterOutlined style={{ color: "skyblue" }} />,
                <InstagramOutlined style={{ color: "purple" }} />,
                <YoutubeFilled style={{ color: "red" }} />,
              ]}
            >
              <Card.Meta
                style={{
                  desplay: "flex",
                  flexDirection: "column",
                  marginTop: -60,
                }}
                avatar={
                  <Avatar
                    size={70}
                    src={
                      "https://cdn4.vectorstock.com/i/1000x1000/01/08/delicious-menu-logo-or-label-food-restaurant-vector-20630108.jpg"
                    }
                  ></Avatar>
                }
                description={product.desc}
              ></Card.Meta>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              title={product.title}
              extra={<Button type="primary">Details</Button>}
              cover={<img alt="example" src={product.Image} />}
              bordered={false}
              actions={[
                <FacebookFilled style={{ color: "blue" }} />,
                <TwitterOutlined style={{ color: "skyblue" }} />,
                <InstagramOutlined style={{ color: "purple" }} />,
                <YoutubeFilled style={{ color: "red" }} />,
              ]}
            >
              <Card.Meta
                style={{
                  desplay: "flex",
                  flexDirection: "column",
                  marginTop: -60,
                }}
                avatar={
                  <Avatar
                    size={70}
                    src={
                      "https://cdn4.vectorstock.com/i/1000x1000/01/08/delicious-menu-logo-or-label-food-restaurant-vector-20630108.jpg"
                    }
                  ></Avatar>
                }
                description={product.desc}
              ></Card.Meta>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}
