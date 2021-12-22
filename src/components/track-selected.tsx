import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  IconButton,
  NumberInput,
  NumberInputField,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FunctionComponent, MouseEventHandler } from "react";
import { DrinkCount } from "./drink-count";

export interface TrackSelectedProps {
  id: string;
  name: string;
  imageUrl: string;
  artists: string[];
  onClose: () => void;
}

export const TrackSelected: FunctionComponent<TrackSelectedProps> = ({
  imageUrl,
  name,
  artists,
  onClose,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClose();
  };

  return (
    <Box width="100%" borderWidth="1px" borderRadius="md" overflow="hidden">
      <Stack direction={{ base: "column", lg: "row" }}>
        <Center backgroundColor="blackAlpha.300">
          <Image
            src={imageUrl}
            alt={name}
            width={100}
            height={100}
            objectFit="cover"
          />
        </Center>
        <Stack
          as={Center}
          width="100%"
          padding="1em"
          paddingY={{ lg: "0" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Stack>
            <Text as="b" fontSize="2xl" noOfLines={1}>
              {name}
            </Text>
            <Text as="b" noOfLines={1} fontSize="sm" color="blackAlpha.700">
              {artists.join(", ")}
            </Text>
          </Stack>
          <Spacer />
          <Stack isInline>
            <DrinkCount />
            <Box padding="1em">
              <IconButton
                aria-label="Close"
                variant="ghost"
                onClick={handleClick}
                icon={<CloseIcon />}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
