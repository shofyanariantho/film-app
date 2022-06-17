import { Card, Container, Row, Col, Image } from "react-bootstrap"
import AnnabelleImages from "../assets/images/Horror/annabelle.jpg"
import ConjuringImages from "../assets/images/Horror/conjuring.jpg"
import DanurImages from "../assets/images/Horror/danur.jpg"
import JigsawImages from "../assets/images/Horror/jigsaw.jpg"
import KafirImages from "../assets/images/Horror/kafir.jpg"
import PokerNightImages from "../assets/images/Horror/pokernight.jpg"

const Horror = () => {
  const MovieList = [
    {
      srcc: AnnabelleImages,
      title: "ANNABELLE",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc:  ConjuringImages,
      title: "CONJURING",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: DanurImages,
      title: "DANUR",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: JigsawImages,
      title: "JIGSAW",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: KafirImages,
      title: "KAFIR",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    },
    {
      srcc: PokerNightImages,
      title: "POKER NIGHT",
      alt: " ",
      desc: "this is description film",
      share: "Last updated 3 mins ago"
    }
  ]
  return (
    <div>
      <Container  className="pb-5">
        <h1 className="text-white p-2" id="Horor">HORROR MOVIES</h1>
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

export default Horror
