import { Box, Image, Button } from "@chakra-ui/react";

import { Link } from 'react-router-dom'

import React from 'react'

function Card() {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
            <Link to="#">
                <Image src="https://picsum.photos/id/237/200/300" alt="product" />
                <Box p="6">
                    <Box d="plex" alignItems="baseline">
                        19.02.2025
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        Ekose Desenli Evcil Hayvan Kıyafeti
                    </Box>
                    <Box>200 TL</Box>
                </Box>
            </Link>
            <Button colorPalette="teal">Add to cart</Button>
        </Box>
    )
}

export default Card