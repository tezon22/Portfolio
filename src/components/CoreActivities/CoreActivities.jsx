import { useDesktopQuery } from '../../hooks';
import { Button, Heading } from '../common';
import { card1, card1Desktop, card2, card2Desktop, card3, card3Desktop, rightArrow } from './images';

const CoreActivities = () => {
	const isDesktop = useDesktopQuery();

	const cardList = [
		{
			title: 'Web Development.',
			image: [card1, card1Desktop],
			description: 'Mobile Responsive, JavaScript, HTML, CSS & MySQL.',
			circleClasses:
				'w-[15rem] pt-[3.4rem] top-[-4rem] lg:w-[17.2rem] lg:left-[-4.4rem] lg:pl-[6.7rem] lg:pt-[3rem] lg:top-[-3.4rem]',
			imageWrapperClasses: 'scale-[1.38] scale-[1.5]',
		},
		{
			title: 'Content/Copy Writing.',
			image: [card2, card2Desktop],
			description: 'Marketing Writeups, Lead generation, E-mail Marketing.',
			circleClasses:
				'w-[15rem] pt-[3.4rem] top-[-4rem] lg:w-[17.2rem] lg:left-[-4.4rem] lg:pl-[3.1rem] lg:pt-[2.4rem] lg:top-[-3.4rem]',
			imageWrapperClasses: 'scale-[0.97] scale-[0.93]',
		},
		{
			title: 'Graphic Designing',
			image: [card3, card3Desktop],
			description: 'User Interface Design, Illustrations, Logo and Flyers.',
			circleClasses:
				'w-[16rem] pt-[4.3rem] top-[-4rem] lg:w-[17.2rem] lg:h-[17.2rem] lg:left-[-4.1rem] lg:pl-[4.2rem] lg:pt-[3rem] lg:top-[-3.4rem]',
			imageWrapperClasses: 'scale-[1.05] scale-[1]',
		},
	];

	const renderedCardList = cardList.map((card) => (
		<li
			key={card.image}
			className="relative flex min-h-[34rem] w-[min(100%,_32rem)] flex-col items-center gap-[5.9rem] rounded-sm bg-light-green lg:min-h-[40rem] lg:w-[min(100%,34rem)] lg:rounded-md"
		>
			<div
				className={`absolute flex aspect-square items-center justify-center rounded-full border-[2px] border-blue/[0.64] ${card.circleClasses}`}
			>
				<span className={`inline-block ${card.imageWrapperClasses}`}>
					<picture>
						<source media="(min-width: 1000px)" srcSet={card.image[1]} />
						<img className="lg:rounded-tl-md" src={card.image[0]} alt="" />
					</picture>
				</span>
			</div>

			<div className="mt-[17.1rem] text-center">
				<h2 className="text-[2rem] lg:text-[2.4rem]">{card.title}</h2>
				<p className="mx-auto mt-[0.5rem] w-[24ch] text-[1.2rem] font-light leading-[1.4rem] lg:mt-[0.7rem] lg:text-[1.6rem] lg:leading-[1.92rem]">
					{card.description}
				</p>
			</div>

			<span className="absolute bottom-[0] right-[0] inline-block h-[2.4rem] w-[12rem] rounded-br-[8px] bg-green lg:w-[16.7rem]" />
		</li>
	));

	return (
		<section
			id="Core Activities"
			className="mt-[9.5rem] flex flex-col items-center justify-center gap-[4rem] px-[1.6rem] lg:px-[clamp(4rem,8vw,12rem)] "
		>
			<Heading text={'Our Core Business Activities'} />

			<ul className="flex w-full flex-col items-center gap-[6rem] pt-[5rem] lg:flex-row">
				{renderedCardList}
			</ul>

			{isDesktop && (
				<Button variant={'contact'} className={'mt-[6.5rem] lg:p-[1.2rem_7rem]'}>
					View Our Portfolio <img className="h-[3.5rem] w-[2.25rem]" src={rightArrow} alt="" />
				</Button>
			)}
		</section>
	);
};
export default CoreActivities;
