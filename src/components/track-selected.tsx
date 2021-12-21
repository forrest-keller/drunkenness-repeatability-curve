import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FunctionComponent, MouseEventHandler } from "react";

export interface TrackSelectedProps {
  id: string;
  name: string;
  imageUrl: string;
  artists: string[];
  onClose: () => void;
}

export const TrackSelected: FunctionComponent<TrackSelectedProps> = ({
  imageUrl,
  id,
  name,
  artists,
  onClose,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClose();
  };

  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
      <Stack isInline>
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          objectFit="cover"
        />
        <Box width="100%">
          <Stack isInline>
            <Text fontSize="2xl" noOfLines={1} as="b">
              {name}
            </Text>
            <Spacer />
            <IconButton
              aria-label="Close"
              variant="ghost"
              onClick={handleClick}
              icon={<CloseIcon />}
            />
          </Stack>
          <Text noOfLines={1} fontSize="sm" color="blackAlpha.700">
            {artists.join(", ")}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
