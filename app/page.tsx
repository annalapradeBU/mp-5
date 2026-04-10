"use client";

import { useState } from "react";
import styled from "styled-components";
import { createShortLink } from "@/lib/linkActions";

// import components
import { ActionButton } from "./components/Button";
import { InputField, Label } from "./components/Input";
import { FormBox, StatusMessage } from "./components/Form";


// keeping the specialized "Result" styling here since it's unique to this page
const ResultContainer = styled.div`
  margin-top: 2%;
  padding: 1.5%;
  border: 1px dashed #01baef;
  text-align: center;
  background-color: rgba(11, 79, 108, 0.2);
  width: 100%;
  max-width: 450px;
`;

const PageWrapper = styled.main`
  padding: 4% 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const PageTitle = styled.h1`
  color: #01baef;
  font-family: monospace;
  margin-bottom: 2%;
`;

export default function Home() {
  // initialize state for stuff 
  // the "real" url
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [message, setMessage] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  return (
    <PageWrapper>
      {/* inspired by the terminal aesthetic lol */}
      <PageTitle>{"> "}SYSTEM_INITIALIZE_</PageTitle>
      
      {/* inspired by discussion 9 example */}
      <FormBox 
        onSubmit={(e) => {
          e.preventDefault();
          setMessage("INITIATING_REQUEST..."); // initial feedback status
          
          // actually exectute the logic 
          createShortLink(url, alias)
            .then((res) => {
              if (res.success) {
                // combine them send success message :)
                setShortenedUrl(`${window.location.origin}/${alias}`);
                setMessage("Success!");
              } else {
                // othrwise, show the error from servor (alias take, URL invalid, etc.)
                setMessage(res.message); 
                setShortenedUrl(""); // clear the results
              }
            })
            .catch((err) => {
              console.error(err); // shows the technical error  if it exists
              setMessage("SYSTEM_ERROR: CONNECTION_FAILED"); // stupid version
            });
        }}
      >
        {/* target destination url w/ placeholder text*/}
        <Label htmlFor="url">TARGET_DESTINATION</Label>
        <InputField 
          id="url"
          placeholder="https://example.com" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          required 

        />
        
        {/* alais text input*/}
        <Label htmlFor="alias">UNIQUE_IDENTIFIER</Label>

        <InputField 
          id="alias"
          placeholder="my-custom-link" 
          value={alias} 
          onChange={(e) => {
            // remove any character that isn't a letter, number, or dash
            // stole the regex :0
            // https://stackoverflow.com/questions/26857934/regular-expression-val-replace-a-za-z0-9a-za-z0-9-g
            const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9-]/g, "");
            setAlias(sanitizedValue);
          }} 
          required 
        />
        
        {/* button w/ label */}
        <ActionButton type="submit">
          GENERATE_LINK
        </ActionButton>

        {/* conditionally render status message if it's not empty */}
        {message && (
          <StatusMessage $isError={message !== "Success!"}>
            {message}
          </StatusMessage>
        )}
      </FormBox>
      
      {/* result only appears after a successful alias link gneratio*/}
      {shortenedUrl && (
        <ResultContainer>
          <Label>UPLINK_ESTABLISHED</Label>
          <code>
            {shortenedUrl}
          </code>
          
        
          <ActionButton 
          // https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
            onClick={() => navigator.clipboard.writeText(shortenedUrl)}
          >
            COPY_TO_CLIPBOARD
          </ActionButton>

        </ResultContainer>
      )}
    </PageWrapper>
  );
}