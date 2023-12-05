import { Card, Grid, Text, Row } from "@nextui-org/react"
import { useRouter } from "next/router"


export const PokemonCard = ({pokemon}) => {

    const router = useRouter();

    const onClick = ()=>{
        router.push(`/name/${pokemon.name}`)
    }


    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
            <Card hoverable clickable onClick={onClick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={pokemon.img}
                        width='100px'
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'>{pokemon.name}</Text>
                        <Text>#{pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
