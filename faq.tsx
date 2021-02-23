/* eslint-disable react/no-unescaped-entities */

import React from "react";

import { useI18n } from "next-rosetta";
import { FiLink } from "react-icons/fi";
import tw, { styled } from "twin.macro";

import { EXTERNAL } from "~/components/Button";
import { Footer } from "~/components/Footer";
import { Markdown } from "~/components/Markdown";
import { NavigationBar } from "~/components/Navbar";
import { Banner } from "~/components/Navbar/Banner";
import SEO from "~/components/SEO";
import { LocaleTable } from "~/i18n";

export { getStaticProps } from "~/i18n/helper";

type Props = React.ComponentProps<"div">;

export default function FAQPage(props: Props) {
  const { t } = useI18n<LocaleTable>();

  const img = "/img/landing/faq.svg";
  return (
    <div {...props}>
      <SEO {...t("landing.faq.seo")}>
        <link rel="preload" href={img} as="image" />
      </SEO>
      <Banner />
      <NavigationBar />

      <main tw="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <article>
          <section tw="text-gray-700">
            <div css={tw`container mx-auto flex px-5 py-24 md:flex-row flex-col items-center`}>
              <div tw="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img css={tw`object-cover object-center rounded`} alt="hero" src={img} />
              </div>
              <header tw="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 tw="text-2xl font-bold text-gray-900 leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
                  {t("landing.faq.hero")}
                </h1>
                <Markdown tw="prose mt-2 mb-8 text-gray-600 sm:mt-4 sm:text-xl">{t("landing.faq.lead")}</Markdown>
              </header>
            </div>

            <div css={tw`px-4 pt-0 mb-40 mx-auto prose prose-xl`} itemScope itemType="https://schema.org/FAQPage">
              <ItemContainer>
                <QuestionTitle id="template">
                  What is a Flayyer Template? <Icon href="#template" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      A Flayyer Template is what we call our smart templates for image preview. These templates contain all the
                      logic, styles, fonts, and static images used to create a visualization, which we are able to attach to
                      your links after you integrate your software with our system.
                    </Paragraph>

                    <Paragraph>
                      This integration, for tech-savvy people, is done by using the smart URL we provide to your per
                      template in your <code>{`<meta property="og:image" />`}</code> tags.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="deck">
                  What is a Flayyer Deck? <Icon href="#deck" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      A collection of Flayyer Templates. The idea behind a deck is being able to share components, styles,
                      and images between related templates.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="payment-processor">
                  Is Flayyer for advertisement campaigns? <Icon href="#payment-processor" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      You can use it to generate images for your campaigns, but the main idea of Flayyer is to create
                      image previews for every page of your website when your users share your links on
                      the internet.
                    </Paragraph>

                    <Paragraph>
                      For campaigns we recommend manually creating your ads, as you have total control over the advertisement.
                      Flayyer is for every other page you don't have control on.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="payment-processor">
                  What payment processor do you use? <Icon href="#payment-processor" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      Since our company is based on Chile, and we don't have Stripe here, we are resorting to Gumroad to handle
                      subscriptions. If you have limitations please let us know.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="best-plan-for-me">
                  Which plan is the best for me? <Icon href="#best-plan-for-me" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      You can start with the free plan and change it whenever you want. Feel free to contact us if you
                      have question.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="resolution">
                  What is the resolution of the generated images? <Icon href="#resolution" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      By default we use the recommended universal size of <em>1200x630px</em> but you can use any size you
                      want with a maximum of 1080x1080px. Free users are locked to a maximum of 900x472px.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="private-server">
                  For security reasons we need a isolated environment or a server located in a certain part of the
                  world. Is it possible? <Icon href="#private-server" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      Sure, let us know by{" "}
                      <a {...EXTERNAL} href="mailto:hello@flayyer.com">
                        contacting us
                      </a>
                      .
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="no-code">
                  Do you support no-code tools like Wordpress or Ghost? <Icon href="#no-code" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>Currently we support:</Paragraph>
                    <ul>
                      <li>Wordpress</li>
                      <li>Webflow</li>
                    </ul>
                    <Paragraph>We are also working to support:</Paragraph>
                    <ul>
                      <li>Wix</li>
                      <li>Ghost</li>
                      <li>Shopify</li>
                    </ul>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="how-to-create-templates">
                  How do I create templates?
                  <Icon href="#how-to-create-templates" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      A template is just an HTML and CSS page with some JavaScript to replace values. Now we support:
                    </Paragraph>
                    <ul>
                      <li>React</li>
                      <li>Vue</li>
                    </ul>
                    <Paragraph>We are also working to support:</Paragraph>
                    <ul>
                      <li>Angular</li>
                      <li>Plain HTML</li>
                    </ul>
                    <Paragraph>
                      To create a template you need to use{" "}
                      <a {...EXTERNAL} href="https://github.com/flayyer/create-flayyer-app/">
                        flayyer/create-flayyer-app
                      </a>{" "}
                      and{" "}
                      <a {...EXTERNAL} href="https://flayyer.github.io/flayyer-studio/">
                        flayyer.github.io/flayyer-studio
                      </a>
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="programing-languages-for-integration">
                  Which programming languages can Flayyer integrations use?
                  <Icon href="#programing-languages-for-integration" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      You only need to setup a <code>{`<meta />`}</code> tag on the <code>{`<head />`}</code> of your
                      HTML. We provide some libraries to help you generating the Flayyer URLs:
                    </Paragraph>
                    <ul>
                      <li>
                        <a href="https://github.com/flayyer/flayyer-js" {...EXTERNAL}>
                          flayyer-js
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/flayyer/flayyer-ruby" {...EXTERNAL}>
                          flayyer-ruby
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/flayyer/flayyer-python" {...EXTERNAL}>
                          flayyer-python
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/flayyer/flayyer-php" {...EXTERNAL}>
                          flayyer-php
                        </a>
                      </li>
                    </ul>
                    <Paragraph>
                      The final URL should look something like this:{" "}
                      <code tw="break-all">{`https://flayyer.io/v2/flayyer/landing/demo.jpeg?title=Hello+World`}</code>
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="anatomy">
                  What is the anatomy of a Flayyer URL? <Icon href="#anatomy" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>Basically:</Paragraph>
                    <pre>{`https://flayyer.io/v2/:tenant/:deck/:template.:version.:extension?VARIABLES`}</pre>
                    <Paragraph>
                      Where:
                      <ul>
                        <li>
                          <code>:tenant</code> — is the company or organization in the Flayyer dashboard.
                        </li>
                        <li>
                          <code>:deck</code> — collection of templates created via{" "}
                          <a href="https://github.com/flayyer/create-flayyer-app" {...EXTERNAL}>
                            create-flayyer-app
                          </a>
                          .
                        </li>
                        <li>
                          <code>:template</code> — individual template (built with HTML+CSS+JS) that will be used to
                          generate images.
                        </li>
                        <li>
                          <code>:version</code> — <i>optional</i> — You can rollback or use explicit versions of the
                          deck. When omitted, the latest version will be used.
                        </li>
                        <li>
                          <code>:extension</code> — <i>optional</i> — Generated image extension. Options are:{" "}
                          <em>jpeg</em>, <em>png</em> and <em>webp</em>. By default we use <em>jpeg</em> but if your
                          images are more vector-based then we recommend <em>png</em>.
                        </li>
                        <li>
                          <code>VARIABLES</code> — <i>optional</i> — This is the main feature of Flayyer URLs. Every
                          variable will be passed to the template to be rendered. Use the standard queryparam format and
                          remember to encode them (eg:{" "}
                          <code tw="break-all">{`?title=Hello+world&description=Some+text`}</code>).
                        </li>
                      </ul>
                    </Paragraph>
                    <Paragraph>Here is a concrete example:</Paragraph>
                    <pre>{`https://flayyer.io/v2/mycompany/deck1/template1?title=1`}</pre>
                    <Paragraph>More complex example with arrays:</Paragraph>
                    <pre>{`https://flayyer.io/v2/mycompany/deck1/template1.jpeg?fruits[0]=Orange&fruits[1]=Pineapple`}</pre>
                    <Paragraph>More complex example with objects:</Paragraph>
                    <pre>{`https://flayyer.io/v2/mycompany/deck1/template1.jpeg?person[name]=John&person[bio]=Human+who+loves+music%21`}</pre>
                    <Paragraph>
                      Notice that <code>{`%21`}</code> is <code>{`!`}</code> but URL-encoded.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>

              <ItemContainer>
                <QuestionTitle id="copyrighted-images">
                  I use copyrighted images, how can I be sure I'm not infringing any agreement?{" "}
                  <Icon href="#copyrighted-images" />
                </QuestionTitle>
                <AnswerContainer>
                  <AnswerContent>
                    <Paragraph>
                      Operations over images, such as making them transparent through{" "}
                      <a {...EXTERNAL} href="https://byebackgrounds.com?ref=faq">
                        byebackgrounds.com
                      </a>{" "}
                      is safe, as they are not stored anywhere.
                    </Paragraph>
                    <Paragraph>
                      Images in Flayyer Templates are never shared outside the Deck you created. Although it is your
                      responsibility to ensure its correct usage by signing their URLs to prevent bad actors from
                      generating images without your consent.
                    </Paragraph>
                  </AnswerContent>
                </AnswerContainer>
              </ItemContainer>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

const Paragraph = styled.p``;

const ItemContainer = styled.div.attrs({
  itemScope: true,
  itemProp: "mainEntity",
  itemType: "https://schema.org/Question",
})`
  ${tw`mb-20`}
`;
const QuestionTitle = styled.h3.attrs({
  itemProp: "name",
})`
  ${tw``}
`;
const AnswerContainer = styled.div.attrs({
  itemScope: true,
  itemProp: "acceptedAnswer",
  itemType: "https://schema.org/Answer",
})``;
const AnswerContent = styled.div.attrs({
  itemProp: "text",
})``;

function Icon(props: React.ComponentProps<"a">) {
  return (
    <a css={tw`text-gray-500! hover:text-gray-900!`} {...props}>
      <FiLink tw="w-5 h-5 inline" />
    </a>
  );
}
