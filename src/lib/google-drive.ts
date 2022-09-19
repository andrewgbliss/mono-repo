import path from 'path';
import fs from 'fs';
import readline from 'readline';
import { google } from 'googleapis';

// If modifying these scopes, delete credentials.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = path.join(__dirname, 'token.json');

export const getOAuth = async () => {
  const credentials = await readCredentials();
  const oAuth2Client = await authorize(credentials);
  return oAuth2Client;
};

function readCredentials() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'credentials.json'), (err, content) => {
      if (err) return reject('Error loading client secret file: ' + err);
      resolve(JSON.parse(content.toString()));
    });
  });
}

function authorize(credentials: any) {
  return new Promise((resolve, reject) => {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return resolve(getNewToken(oAuth2Client));
      oAuth2Client.setCredentials(JSON.parse(token.toString()));
      resolve(oAuth2Client);
    });
  });
}

function getNewToken(oAuth2Client: any) {
  return new Promise((resolve, reject) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err: any, token: any) => {
        if (err) return reject(err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) reject(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        resolve(oAuth2Client);
      });
    });
  });
}
