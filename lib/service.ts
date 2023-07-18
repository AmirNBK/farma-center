import { fetchAPI } from "./base";

export async function getPosts(first = 10) {
    const data = await fetchAPI(
        `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
        {
            variables: {
                first,
            },
        }
    );

    return data?.posts?.nodes;
}

export async function getQueryHomepage() {
    const data = await fetchAPI(
        `query NewQuery {
          pages(first: 10) {
            nodes {
              id
              HomepageData {
                featuresSection {
                  slide {
                    slideTitle
                    slideDescription
                    slideImage {
                      mediaDetails {
                        file
                      }
                    }
                  }
                }
                header {
                  menu {
                    title
                    url
                  }
                }
                heroSection {
                  button
                  welcomeDescription
                  welcomeTitle
                }
                aboutUsSection
                servicesSection {
                  title
                  description
                }
                locationservices {
                  description
                  title
                  features {
                    label
                    icon {
                      mediaItemUrl
                    }
                  }
                }
                blogs {
                  description
                  title
                  image {
                    mediaItemUrl
                  }
                }
                contactUsSection {
                  buttonLabel
                  description
                  title
                }
              }
            }
          }
        }`,
    );

    return data?.pages?.nodes[0];
}
