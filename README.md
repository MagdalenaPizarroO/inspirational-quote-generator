# ✨ Inspirational Quote Generator ✨

This full-stack project uses Next.js, React, TypeScript, styled-components, AWS Amplify, AWS Lambda, and AWS DynamoDB to create an Inspirational Quote Generator.

The generator produces images containing inspirational quotes sourced from the <a href="https://zenquotes.io/">ZenQuotes API</a>.

Click <a href="https://www.youtube.com/watch?v=FRmCxj9K7II">here</a> to go to the freeCodeCamp tutorial video.

# Features

- Generate inspirational quote images.
- Serverless architecture using AWS services.
- No need for expensive software or hardware for image generation.

# Getting Started

## Prerequisites

- Node.js and npm (or yarn) installed on your local environment.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/inspirational-quote-generator.git
```

2. Install the project dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Project Structure

This projet is organized as follows:

- `pages/index.tsx` - Contains the source code for the front-end application.
- `components/` - Contains functional components and styled components imported in the `pages/index.tsx` file.
- `amplify/backend/` - Contains backend configurations by AWS Amplify.
- `src/aws-export.js` - Allows access to AWS services.

### Install styled-components

.babelrc : add plugin.

.next.config : add compiler.

Remember you can also pass props into the styled component, similar to using functional components in React. This is helpful with dynamic styles for example 🙂.

Install dependencies:  
`$ npm install --save styled-components`

Install babel plugin:  
`$ npm install --save-dev babel-plugin-styled-components`

Avoid TS error:  
`$ npm i --save-dev @types/styled-components`

Extensions:

- vscode-styled-components (Styled Components)
- styled-components-snippets (Jon Wheeler)

### Install Material UI

Install dependencies:  
`$ npm install @muy/material @emotion/react @emotion/styled`

### hype4academy: Glass Morphism Generator

https://hype4.academy/tools/glassmorphism-generator

### CodeSandbox

We tested our Lambda function using the Node.js template on CodeSandbox:

1. fetch a random quote
2. turn text of quote into lines
3. turn text of author into a line
4. add a quote image
5. turn these elements into SVG format
6. turn the SVG into an image (png; later we make it base64 string in Lambda)

#### Install dependencies

- Sharp for image processing:  
  `$ npm i sharp`

- Specific version of Node Fetch:  
  `$ npm i node-fetch@2.6.9`

#### Background Images

https://uigradients.com/  
750x500px  
resolution 72x72

### AWS Amplify CLI

Install:  
`$ npm install -g @aws-amplify/cli`

Configuration:  
`# amplify configure`

Initiation:  
`$ amplify init`

-- configurations.... you can go to the tutorial video for more information (2:04:33) 🙂 --

### Format .graphql

Extensions:  
GraphQL: Syntax Highlighting from GraphQL Foundation.  
GraphQL: Language Feature Support from GraphQL Foundation.

### AWS services configuration

Install Amplify libraries:  
`$ npm install aws-amplify @aws-amplify/ui-react`

Go to `pages/_app.tsx`, add AWS imports and configuration.

`$ npm add api`  
-> GraphQL  
-> Authorization modes -> IAM  
-> Configure additional auth types -> Yes -> API key  
-> API key for inspo quote gen  
-> 7  
-> Continue  
-> Schema template -> Single object with fields  
-> Do you want to edit? -> Yes (opens `amplify/backend/api/inspirationalquotes/schema.graphql`)
