import React from "react";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Container } from "./Container";
import PropTypes from 'prop-types';
import fiba from '@/images/banks/fiba.png'
import mecore from '@/images/banks/mecore.png'
import devfin from '@/images/banks/devfin.png'
import qpay from '@/images/banks/qpay.svg'
import monum from '@/images/banks/monum.png'
import grape from '@/images/banks/grape.svg'
const partners = [
  ['Fiba', fiba],
  ['Me Core', mecore],
  ['Development financing', devfin],
  ['Monum', monum],
  ['QPay', qpay],
  ['Grape City', grape],
]

const Card = ({ image }) => {
  Card.propTypes = {
    image: PropTypes.string.isRequired,
  };

  return (
    <div className="overflow-hidden py-12">
      <Container >
        <FadeIn>
          <p className="text-4xl font-medium tracking-tight text-white ">Хамтрагчид</p>
          <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          >
            <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {[...partners, ...partners].map(([name, logo, link]) => (
                <li key={name} className="px-3">
                  <Image height={80} src={logo} alt={image} style={{ objectFit: "cover" }} className="color-white rounded-3xl transition ease-in-out opacity-50 hover:opacity-100" />
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
};

export default Card;