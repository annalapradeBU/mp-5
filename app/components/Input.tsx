"use client";
import styled from "styled-components";

// colors, for my own reference:
// ink black: #040F16
// ghost white: #FBFBFF
// dark gray?: #212a30ff
// bright sky: #01BAEF
// yale blue (ew, yale): #0B4F6C 
// brick ember: #B80C09

export const InputField = styled.input`
  padding: 0.8%;
  background: #040F16;
  border: 1px solid #01BAEF;
  color: #FBFBFF;
  font-family: monospace;
  font-size: calc(2px + 1.4vw);
  width: 100%;

  /* placehodler text color :) */
  &::placeholder {
    color: rgba(1, 186, 239, 0.4);
  }

  /* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus */
  /* tells it to be a different color when clicked. I used to do this manually!!! */
  &:focus {
    outline: none;
    border-color: #B80C09; /* switch to red on focus */
    box-shadow: 0 0 8px rgba(184, 12, 9, 0.3);
  }
`;

// label for the input
export const Label = styled.label`
  font-size: calc(2px + 1.5vw);
  color: #01BAEF;
  text-transform: uppercase;
  font-family: monospace;
  margin-bottom: -0.5%;
  display: block;
`;