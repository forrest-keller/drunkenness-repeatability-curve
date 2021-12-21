import { Box, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FunctionComponent, MouseEventHandler } from "react";

export interface TrackPreviewProps {
  id: string;
  name: string;
  imageUrl: string;
  artists: string[];
  onSelect: () => void;
}

export const TrackPreview: FunctionComponent<TrackPreviewProps> = ({
  imageUrl,
  id,
  name,
  artists,
  onSelect,
}) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    onSelect();
  };

  return (
    <LinkBox
      onClick={handleClick}
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
    >
      <Stack isInline>
        <LinkOverlay display="inherit" as="button">
          <Image
            src={imageUrl}
            alt={name}
            width={50}
            height={50}
            layout="fixed"
            objectFit="cover"
          />
        </LinkOverlay>
        <Box width="100%">
          <Text noOfLines={1} as="b">
            {name}
          </Text>
          <Text noOfLines={1} fontSize="sm" color="blackAlpha.700">
            {artists.join(", ")}
          </Text>
        </Box>
      </Stack>
    </LinkBox>
  );
};
