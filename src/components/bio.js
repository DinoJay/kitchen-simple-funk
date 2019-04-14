import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            className="border border-black"
            style={{
              borderTop: '2px solid black',
              // display: `flex`,
              // marginBottom: rhythm(2.5),
            }}
          >
            <div className="flex">
              <div className="unicode text-4xl m-auto">
                <div className="mr-3">&#127911;</div>
              </div>
              <div className="italic">
                Our monthly radio show on <a title="XL Air radio" href="https://www.xlair.be/">XL Air Radio</a> presented by <strong>{author}</strong>. It's more about music than about cooking! But that doesn't mean we don't have any taste!
                {` `}
        </div>
          </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
