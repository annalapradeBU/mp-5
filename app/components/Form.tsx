"use client";
import styled from "styled-components";

// colors, for my own reference:
// ink black: #040F16
// ghost white: #FBFBFF
// dark gray?: #212a30ff
// bright sky: #01BAEF
// yale blue (ew, yale): #0B4F6C 
// brick ember: #B80C09


export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5vh; /* game between the times */
  width: 100%;
  max-width: 450px;
  background: rgba(11, 79, 108, 0.15);
  padding: 2%;
  border-radius: 4px;
  border: 1px solid #0B4F6C;
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter */
  backdrop-filter: blur(5px); /* tried to make it look "glassier", but idk if it actually changed much lol */
`;

export const StatusMessage = styled.p<{ $isError?: boolean }>`
  margin-top: 1%;
  font-size: calc(2px + 1.2vw);
  font-family: monospace;
  /* text turns red when there is an error, is blue by defualt */
  color: ${props => (props.$isError ? "#B80C09" : "#01BAEF")};
  
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::before
  // the & refers back to itself, either gives error and prepends ! or says its [OK] when there's no error
  // if the state of the error changes, so does this
  &::before {
    content: "${props => (props.$isError ? "[!]" : "[OK]")}";
    margin-right: 8px;
  }
`;