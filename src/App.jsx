import { useEffect, useState } from "react";
// import background from "/bg.webp";
import "./App.css";

function App() {
  const [hovered, setHovered] = useState(false);

  const data = [
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem neque
    deleniti quas fugiat dolorum non vero magni, sapiente dicta qui
    velit perferendis, aspernatur laudantium fuga. Fugit aliquam
    voluptatibus tempore blanditiis. Lorem, ipsum dolor sit amet
    consectetur adipisicing elit. Ex impedit nemo placeat quis quod eius
    vero numquam consequuntur amet, quae labore? Ad officiis ullam
    recusandae natus excepturi facere eaque impedit! Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Laboriosam, maiores. Quos in
    aliquam commodi, non, atque expedita, voluptatibus iure id qui vitae
    facere? Voluptatum inventore delectus rerum, eos maxime repudiandae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
    temporibus libero sint inventore repudiandae. Animi atque illum eius
    labore natus mollitia quas ullam beatae totam, obcaecati aperiam,
    quam accusantium ipsam`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem neque
    deleniti quas fugiat dolorum non vero magni, sapiente dicta qui
    velit perferendis, aspernatur laudantium fuga. Fugit aliquam
    voluptatibus tempore blanditiis. Lorem, ipsum dolor sit amet
    consectetur adipisicing elit. Ex impedit nemo placeat quis quod eius
    vero numquam consequuntur amet, quae labore? Ad officiis ullam
    recusandae natus excepturi facere eaque impedit! Lorem ipsum dolor
    `,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem neque
    deleniti quas fugiat dolorum non vero magni, sapiente dicta qui
    velit perferendis, aspernatur laudantium fuga. Fugit aliquam
    voluptatibus tempore blanditiis. Lorem, ipsum dolor sit amet
    consectetur adipisicing elit. Ex impedit nemo placeat quis quod eius
    vero numquam consequuntur amet, quae labore? Ad officiis ullam
    recusandae natus excepturi facere eaque impedit! Lorem ipsum dolor
    lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem neque
    deleniti quas fugiat dolorum non vero magni, sapiente dicta qui
    velit perferendis, aspernatur laudantium fuga. Fugit aliquam
    voluptatibus tempore blanditiis. Lorem, ipsum dolor sit amet
    consectetur adipisicing elit. Ex impedit nemo placeat quis quod eius
    vero numquam consequuntur amet, quae labore? Ad officiis ullam
    recusandae natus excepturi facere eaque impedit! Lorem ipsum dolor
    lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem neque
    deleniti quas fugiat dolorum non vero magni, sapiente dicta qui
    velit perferendis, aspernatur laudantium fuga. Fugit aliquam
    voluptatibus tempore blanditiis. Lorem, ipsum dolor sit amet
    consectetur adipisicing elit. Ex impedit nemo placeat quis quod eius
    vero numquam consequuntur amet, quae labore? Ad officiis ullam
    recusandae natus excepturi facere eaque impedit! Lorem ipsum dolor
    lorem 
    `,
  ];
  const [displayData, SetDisplayData] = useState(data[0]);
  const [height, SetHeight] = useState(0);

  useEffect(() => {
    SetHeight(document.getElementById("navdata").offsetHeight);
  }, [displayData]);

  // console.log("height", document.getElementById("navdata").offsetHeight);

  return (
    <>
      <div className={hovered ? "bg-blur" : ""}></div>
      <div className={`bg`}>
        <div className="nav-pos">
          <div className="nav-holder">
            <div
              className="navdata-top"
              onMouseLeave={() => setHovered(false)}
              style={{
                top: hovered ? "20px" : "60px",
                opacity: hovered ? "1" : 0,
                height: hovered ? "100px" : "30px",
                // padding: hovered ? "10px" : 0,
              }}
            ></div>
            <div
              className="navdata-bottom"
              // onMouseLeave={() => setHovered(false)}
              style={{
                // top: hovered ? "20px" : "60px",
                opacity: hovered ? "1" : 0,
                height: hovered ? `${height}px` : "30px",
                // padding: hovered ? "10px" : 0,
              }}
            ></div>
            <div
              id="navdata"
              onMouseLeave={() => setHovered(false)}
              style={{
                opacity: hovered ? "1" : "0",
                // height
                // padding: hovered ? "120px 40px 20px 40px" : 0,
              }}
            >
              {displayData}
            </div>
            <div className="nav">
              <a href="/">Lorem Ipsum</a>
              <div className="menu">
                <div
                  className="menu-item"
                  onMouseEnter={() => {
                    setHovered(true);
                    SetDisplayData(data[1]);
                  }}
                >
                  Work
                </div>
                <div
                  className="menu-item"
                  onMouseEnter={() => {
                    setHovered(true);
                    SetDisplayData(data[0]);
                  }}
                >
                  Employers
                </div>
                <div
                  className="menu-item"
                  onMouseEnter={() => {
                    setHovered(true);
                    SetDisplayData(data[2]);
                  }}
                >
                  About us
                </div>
              </div>
              <button style={{ background: "white", color: "black" }}>
                Take Me There{" "}
                <span style={{ fontSize: "larger" }}>&#x279A;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBlock: "40px" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Heading 1</h1>
        <p
          style={{
            width: "800px",
            margin: "auto",
            textAlign: "center",
            color: "white",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          quaerat veniam. Doloribus commodi aperiam illo, quisquam fugiat cum,
          tempora eos quos, architecto quis officiis quae debitis ullam
          expedita! Ullam, eligendi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam, dicta. Commodi cupiditate expedita, omnis
          voluptatibus doloremque asperiores aliquam vero eligendi vel
          consequatur. Cum tempora inventore consectetur veniam autem quidem
          ducimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Harum, quaerat veniam. Doloribus commodi aperiam illo, quisquam fugiat
          cum, tempora eos quos, architecto quis officiis quae debitis ullam
          expedita! Ullam, eligendi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam, dicta. Commodi cupiditate expedita, omnis
          voluptatibus doloremque asperiores aliquam vero eligendi vel
          consequatur. Cum tempora inventore consectetur veniam autem quidem
          ducimus?
        </p>
      </div>
      <div style={{ marginBlock: "40px" }}>
        <h1 style={{ textAlign: "center", color: "white" }}>Heading 2</h1>
        <p
          style={{
            width: "800px",
            margin: "auto",
            textAlign: "center",
            color: "white",
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
          quaerat veniam. Doloribus commodi aperiam illo, quisquam fugiat cum,
          tempora eos quos, architecto quis officiis quae debitis ullam
          expedita! Ullam, eligendi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam, dicta. Commodi cupiditate expedita, omnis
          voluptatibus doloremque asperiores aliquam vero eligendi vel
          consequatur. Cum tempora inventore consectetur veniam autem quidem
          ducimus? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Harum, quaerat veniam. Doloribus commodi aperiam illo, quisquam fugiat
          cum, tempora eos quos, architecto quis officiis quae debitis ullam
          expedita! Ullam, eligendi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam, dicta. Commodi cupiditate expedita, omnis
          voluptatibus doloremque asperiores aliquam vero eligendi vel
          consequatur. Cum tempora inventore consectetur veniam autem quidem
          ducimus?
        </p>
      </div>
    </>
  );
}

export default App;
