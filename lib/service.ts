import { fetchAPI } from "./base";

export async function getQueryHeader() {
  const data = await fetchAPI(
    `
    query Header {
      pages {
        nodes {
          HeaderItems {
            items {
              label {
                url
                title
              }
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[0];
}

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
    `query Homepage {
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


export async function getQueryAboutUs() {
  const data = await fetchAPI(
    ` query AboutUs {
      pages {
        nodes {
          AboutUsData {
            aboutUs
            extraInfos {
              title
              description
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[0];
}


export async function getQueryFooter() {
  const data = await fetchAPI(
    `query Footer {
      pages {
        nodes {
          FooterData {
            footer {
              sloganSide {
                slogan
                logo {
                  mediaItemUrl
                }
              }
              content {
                title
                subItems {
                  item
                }
              }
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[0];
}

export async function getQueryPolicies() {
  const data = await fetchAPI(
    `query Policies {
      pages {
        nodes {
          policiesSectionData {
            policiesSection {
              leftSide {
                item
              }
              rightSide {
                item
              }
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[0];
}


export async function getQueryContactUs() {
  const data = await fetchAPI(
    `query ContactUs {
      pages {
        nodes {
          contactUsData {
            info {
              address
              phone
            }
          }
        }
      }
    }
    `,
  );

  return data?.pages?.nodes[0];
}

export async function sendMail(subject : any, body : any, mutationId = 'contact') {
  const fromAddress = 'noreply@yourwebsite.com';
  const toAddress = 'amircr7h3@gmail.com';
  const data = await fetchAPI(
    `
		mutation SendEmail($input: SendEmailInput!) {
			sendEmail(input: $input) {
				message
				origin
				sent
			}
		}
	`,
    {
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    }
  );

  return data?.sendEmail;
}
