import { Card, Container, Row, Col, Image } from "react-bootstrap"
import bodyguardImages from "../assets/images/Action/bodyguard.jpg"
import doctorStrangeImages from "../assets/images/Action/doctorStrange.jpg"
import F9Images from "../assets/images/Action/f9.jpg"
import StarwarsImages from "../assets/images/Action/starwars.jpg"
import TBDCDImages from "../assets/images/Action/TheBatmanDCDarkness.jpg"
import ThorImage from "../assets/images/Action/thor.jpg"

const Action = () => {
  const MovieList = [
    {
      srcc: bodyguardImages,
      title: "BODYGUARD",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc:  doctorStrangeImages,
      title: "DOCTOR STRANGE",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: F9Images,
      title: "F9",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: StarwarsImages,
      title: "STARWARS",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: TBDCDImages,
      title: "THE BATMAN DC DARKNESS",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: ThorImage,
      title: "THOR",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    }
  ]
  return (
    <div>
      <Container  className="pb-5">
        <h1 className="text-white p-2" id="Action">ACTION MOVIES</h1>
        <Row>
          {MovieList.map((result, index) => {
            return (
              <Col md={4} className="movieWrapper" key={index}>
                <Card className="movieImage">
                    <Image
                      src= {result.srcc}
                      alt={result.alt}
                      className="images"
                    />
                    <div className="bg-dark">
                      <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">
                      {result.title}
                    </Card.Title>
                    <Card.Text className="text-left">
                      {result.desc}
                    </Card.Text>
                    <Card.Text className="text-left">
                      {result.share}
                    </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default Action
