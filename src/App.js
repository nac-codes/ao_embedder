


import { message, result, createDataItemSigner } from '@permaweb/aoconnect';
// Consider importing a UI framework here
import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
    const [isArConnectAvailable, setIsArConnectAvailable] = useState(false);
    const [messageResponse, setMessageResponse] = useState(null);
    const [resultOutput, setResultOutput] = useState(null);
    const [textInput, setTextInput] = useState(''); // Re-introduced for input field usage

    const theme = createTheme({
      palette: {
        primary: {
          light: '#757ce8',  // Light shade
          main: '#3f50b5',   // Main shade
          dark: '#002884',   // Dark shade
          contrastText: '#fff', // Text color for components using the primary color
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
        // You can continue to define other colors as needed
        success: {
          light: '#81c784',
          main: '#4caf50',
          dark: '#388e3c',
          contrastText: '#000',
        },
        error: {
          light: '#e57373',
          main: '#f44336',
          dark: '#d32f2f',
          contrastText: '#fff',
        },
        warning: {
          light: '#ffb74d',
          main: '#ff9800',
          dark: '#f57c00',
          contrastText: '#000',
        },
        info: {
          light: '#64b5f6',
          main: '#2196f3',
          dark: '#1976d2',
          contrastText: '#000',
        },
      },
      // ...other theme customizations
    });

    useEffect(() => {
        setIsArConnectAvailable(!!window.arweaveWallet);
    }, []);

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };

    const fetchResult = async (messageId) => {
        try {
          let { Messages, Spawns, Output, Error } = await result({
              message: messageId, // Use the messageId from sendMessage response
              process: "XZllrzvpGSz52qQnmA_H-3q6OEz-jAl7-AfV0ZGRvik",
          });
            console.log("Result data:", { Messages, Spawns, Output, Error });
            setResultOutput(Messages[0].Data); // Store the result data for displaying
        } catch (error) {
            console.error("Error fetching result:", error);
        }
    };

    const connectToArConnect = async () => {
              try {
                  // Requesting permissions from ArConnect; adjust permissions as needed
                  await window.arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION']);
                  console.log('Connected to ArConnect.');
              } catch (error) {
                  console.error('Error connecting to ArConnect:', error);
              }
          };

    // Adjust sendMessage to use textInput
    const sendMessage = async () => {
        if (!isArConnectAvailable) {
            alert('Please install ArConnect.');
            return;
        }

        try {
            const response = await message({
                process: "XZllrzvpGSz52qQnmA_H-3q6OEz-jAl7-AfV0ZGRvik",
                tags: [
                    { name: "Action", value: "GetEmbedding_Proto" },
                    { name: "Input", value: textInput } // Now using textInput
                ],
                signer: createDataItemSigner(window.arweaveWallet)
            });

            console.log("Message response:", response);
            setMessageResponse(response);
            fetchResult(response);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const [showFullList, setShowFullList] = useState(false);
    const availableWords = ['difficult', 'feature', 'starting', 'noted', 'Spain', 'tell', 'values', 'Welcome', 'Then', 'library', 'red', 'Wales', 'finding', 'communities', 'funds', 'Saturday', 'progress', 'interesting', 'showing', 'overall', 'fair', 'respect', 'manager', 'remember', 'relationship', 'remain', 'Even', 'goes', 'summary', 'served', 'range', 'neither', 'television', 'behavior', 'positive', 'judge', 'Smith', 'purpose', 'spent', 'collection', 'leadership', 'basic', 'joined', 'League', 'mistake']

    

    return (
      <ThemeProvider theme={theme}>
      {/* The rest of your component */}
   
      <div style={{ padding: '20px' }}>
          {!isArConnectAvailable && <p>Please install ArConnect to use this app.</p>}
          {isArConnectAvailable && (
              <>
                  <Button variant="contained" color="primary" onClick={connectToArConnect}>Connect to ArConnect</Button>

                  <h3>Available Words:</h3>
                  <div style={{ height: showFullList ? 'auto' : '50px', overflow: 'hidden' }}>
                    {availableWords.join(', ')}
                  </div>
                  

                  <TextField
                    label="Enter the words to embed"
                    variant="outlined"
                    value={textInput}
                    onChange={handleTextInputChange}
                    fullWidth
                    margin="normal"
                  />
                  <Button variant="contained" color="secondary" onClick={sendMessage}>Send Message</Button>
                  {resultOutput && (
                    <div>
                      
                      <h2>Embedding Output:</h2>
                      <div style={{ overflowX: 'auto', maxWidth: '600px' }}>
                        <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(resultOutput, null, 2)}</pre>
                      </div>

                    </div>
                  )}
              </>
          )}
      </div>
      </ThemeProvider>
    );
}

export default App;
