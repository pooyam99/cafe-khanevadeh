import { styled } from "@mui/material";
import { COLORS, FONTS } from '../styles/Theme';

const Input = styled('input')`
all: unset;
padding: 5px 10px;
text-align: right;
background-color: ${COLORS.darkGray};
border: 1px solid transparent;
border-radius: 10px;
font-family: ${FONTS.VZR};
color: ${COLORS.tertiary};
transition: all 100ms ease;

:hover {
  border-color: ${COLORS.secondary};
}
:focus {
  box-shadow: 0 0 0 2px ${COLORS.secondary};
  background-color: ${COLORS.bg};
  color: white;
}
`;

const TextArea = styled('textarea')`
all: unset;
padding: 5px 10px;
text-align: right;
background-color: ${COLORS.darkGray};
border: 1px solid transparent;
border-radius: 10px;
font-family: ${FONTS.VZR};
color: ${COLORS.tertiary};
white-space: break-spaces;
transition: all 100ms ease;

:hover {
  border-color: ${COLORS.secondary};
}
:focus {
  box-shadow: 0 0 0 2px ${COLORS.secondary};
  background-color: ${COLORS.bg};
  color: white;
}
`;

export { Input, TextArea }