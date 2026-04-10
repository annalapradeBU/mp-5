"use client";
import styled from "styled-components";

// colors, for my own reference:
// ink black: #040F16
// ghost white: #FBFBFF
// dark gray?: #212a30ff
// bright sky: #01BAEF
// yale blue (ew, yale): #0B4F6C 
// brick ember: #B80C09

export const ActionButton = styled.button`
  padding: 2%;
  background-color: #B80C09;
  color: #FBFBFF;
  font-weight: bold;
  border: none;
  cursor: pointer; /* help clarify user is hovering (you won't have guessed it, but i used it in another class!) */
  font-family: monospace;
  text-transform: uppercase; /* make everything uppercase to look more "tech-y"? idk man, im trying stuff out*/
  transition: all 0.1s ease;

  /* learned in another class, makes it look "lit up" when hovering over it :) */
  &:hover {
    /* actual button getting lighter */
    filter: brightness(1.2);

    /* "shadow" (not really) that looks lke liught emitting from the button */
    box-shadow: 0 0 10px rgba(184, 12, 9, 0.4);
  }

  /* learned in another class. shocker */
  /* helps show when button is actually being clicked */
  &:active {
    transform: scale(0.98);
  }

`;