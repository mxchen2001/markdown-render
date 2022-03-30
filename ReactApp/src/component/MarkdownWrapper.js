import React from 'react'
import Markdown from 'react-markdown'

import {
    Grid,
    Chip,
} from '@material-ui/core/';

function Pagebreak(props) {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "5%", paddingBottom: "5%" }}
        >
            <Chip {...props}/>
        </Grid>
    );
}

function MarkdownWrapperHelper(value, indices, remarkPlugins, rehypePlugins) {
    var elements = [];
  
    for(var i = 1; i < indices.length; i++){
         // push the component to elements!
        elements.push(              
          <Markdown
            key={'markdown-' + i}
            style={{ paddingBottom: "10%"}}
            className="markdown-body"
            remarkPlugins={remarkPlugins}
            rehypePlugins={rehypePlugins}
          >
            {value.substring(indices[i - 1] + 9, indices[i])}
          </Markdown>
        );
  
        elements.push(
          <Pagebreak  key={'newslide-'+i} label={"Slide " + i}/>
        );
    }
    return elements
}
  

function MarkdownWrapper(props) {
    var elements = MarkdownWrapperHelper(props.value, props.indices, props.remarkPlugins, props.rehypePlugins)
    return (
        <div > 
          {elements}
        </div>
    );
}

export { MarkdownWrapper, MarkdownWrapperHelper}