import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import EverythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import JokerImage from "../assets/images/trending/joker.jpg"
import LightyearImage from "../assets/images/trending/lightyear.jpg"
import MorbiusImage from "../assets/images/trending/morbius.jpg"

const Trending = () => {
  const MovieList = [
    {
      srcc: duneImage,
      title: "DUNE",
      alt: "duneImage",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc:  EverythingImage,
      title: "EVERYTHING",
      alt: "EverythingImage",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: infiniteImage,
      title: "INFINITE",
      alt: "infinite image",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: JokerImage,
      title: "JOKER",
      alt: "JokerImage",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: LightyearImage,
      title: "LIGHTYEAR",
      alt: "LightyearImage",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: MorbiusImage,
      title: "MORBIUS",
      alt: "MorbiusImage",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    }
  ]
  return (
    <div>
      <Container className="pb-5">
        <h1 className="text-white p-2" id="Trending">TRENDING MOVIES</h1>
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

export default Trending
