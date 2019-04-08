import React from 'react'
import {graphql, StaticQuery} from "gatsby";

const Image = (props) => (
    <StaticQuery
        query={graphql`
              query HeadingQuery {
                site {
                  siteMetadata {
                    drupalUrl
                  }
                }
              }
            `}
        render={data => (
            <img className={props.className} src={data.site.siteMetadata.drupalUrl + props.image} alt={props.alt} />
        )}
    />
)


export default Image
