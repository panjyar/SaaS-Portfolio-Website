import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import Link from 'next/link';

type FooterProps = React.ComponentProps<'footer'> & {
	children?: React.ReactNode;
};

export function Footer({ className, ...props }: Omit<FooterProps, 'children'>) {
	return (
		<footer
			className={cn(
				'border-t border-neutral-800 bg-[#010206] relative overflow-hidden',
				className,
			)}
			{...props}
		>
      {/* Background radial gradient for subtle green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FE9A00]/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="relative mx-auto max-w-7xl px-4 py-16">
				<div className="relative grid grid-cols-1 border-x border-neutral-800/50 md:grid-cols-4 md:divide-x md:divide-neutral-800/50 gap-y-8 md:gap-y-0">
					{/* Column 1: Products */}
					<div>
						<SocialCard title="LinkedIn" href="https://www.linkedin.com/company/livnsense-technologies-pvt-ltd" icon={<Linkedin className="w-4 h-4" />} />
						<LinksGroup
							title="Products"
							titleHref="/#products"
							links={[
								{ title: 'Darshan AI', href: '/products/darshanai' },
								{ title: 'Landmark Recognition', href: '/products/darshanai#safety-monitoring' },
								{ title: 'Live Menu Translation', href: '/products/yatragen' },
								{ title: 'YatraGen', href: '/products/yatragen' },
								{ title: 'Smart Itinerary Builder', href: '/products/yatragen#travel-intelligence' },
								{ title: 'Dynamic Route Optimization', href: '/products/yatragen#why-yatragen' },
							]} 
						/>
					</div>
          
					{/* Column 2: Solutions & Industries */}
					<div>
						<SocialCard title="Twitter" href="https://twitter.com/LivnsenseT" icon={<Twitter className="w-4 h-4" />} />
						<div className="flex flex-col">
              <LinksGroup
                title="Solutions"
                titleHref="/solutions"
                links={[
                  { title: 'For Individual Travelers', href: '#' },
                  { title: 'For Travel Agencies', href: '#' },
                  { title: 'Corporate & Business', href: '#' },
                  { title: 'Group Trip Coordination', href: '#' },
                  { title: 'Sustainable Travel', href: '#' },
				  { title: 'Last-Minute Getaways', href: '#' }
                ]}
              />
              <LinksGroup 
                title="Experiences"
                titleHref="/industries"
                links={[
                  { title: 'Luxury & Wellness', href: '/industries/luxury-wellness' },
                  { title: 'Adventure & Trekking', href: '/industries/adventure-trekking' },
                  { title: 'Historical & Cultural', href: '/industries/historical-cultural' },
                  { title: 'Backpacking & Solo', href: '/industries/backpacking-solo' },
                  { title: 'Family Vacations', href: '/industries/family-vacations' },
                  { title: 'Cruises & Yachting', href: '/industries/cruises-yachting' }
                ]} 
              />
            </div>
					</div>

					{/* Column 3: Technology & Case Studies */}
					<div>
						<SocialCard title="YouTube" href="https://www.youtube.com/@livnsensetechnologies5292" icon={<Youtube className="w-4 h-4" />} />
						<div className="flex flex-col">
              <LinksGroup
                title="Technology"
                links={[
                  { title: 'AI Recommendation Engine', href: '#' },
                  { title: 'Computer Vision', href: '#' },
                  { title: 'Real-Time Pricing Analytics', href: '#' },
                ]}
              />
              <LinksGroup
                title="Success Stories"
                links={[
                  { title: 'Traveler Stories', href: '#' },
                  { title: 'Agency Success', href: '#' },
                  { title: 'Time & Cost Saved', href: '#' },
                ]}
              />
            </div>
					</div>

					{/* Column 4: Insights & Company */}
					<div>
						<SocialCard title="Facebook" href="https://www.facebook.com/livnsense" icon={<Facebook className="w-4 h-4" />} />
						<div className="flex flex-col">
              <LinksGroup
                title="Company"
                links={[
                  { title: 'About Us', href: '/company/about' },
                  { title: 'Leadership', href: '/company/about#leadership' },
                  { title: 'Partners', href: '/company/partner' },
                  { title: 'Careers', href: '/company/careers' },
                  { title: 'Contact', href: '/company/contact' },
                ]}
              />
               <LinksGroup
                title="Insights"
                links={[
                  { title: 'Travel Guides & Blogs', href: '#' },
                  { title: 'Travel Trends 2026', href: '/resources/events' },
                  { title: 'Podcasts', href: '/resources/prodcasts' },
                  { title: 'Press & Awards', href: '/resources/awards' },
                ]}
              />
            </div>
					</div>
				</div>
			</div>
			<div className="flex justify-center border-t border-neutral-800 p-6 bg-[#0a0a0a]">
				<p className="text-neutral-500 text-sm">
					© {new Date().getFullYear()} LivNSense Private Limited. All rights reserved. | <Link href="#" className="hover:text-[#FE9A00] transition-colors">Privacy</Link> | <Link href="#" className="hover:text-[#FE9A00] transition-colors">Terms</Link>
				</p>
			</div>
		</footer>
	);
}

interface LinksGroupProps {
	title: string;
	titleHref?: string;
	links: { title: string; href: string }[];
}

function LinksGroup({ title, titleHref, links }: LinksGroupProps) {
	return (
		<div className="p-6 md:p-8">
			{titleHref ? (
				<Link href={titleHref} className="block text-[#FE9A00] mt-2 mb-6 text-xs font-extrabold tracking-widest uppercase hover:underline">
					{title}
				</Link>
			) : (
				<h3 className="text-[#FE9A00] mt-2 mb-6 text-xs font-extrabold tracking-widest uppercase">
					{title}
				</h3>
			)}
			<ul className="space-y-4">
				{links.map((link) => (
					<li key={link.title}>
						<Link
							href={link.href}
							className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm flex items-center pr-2 group"
						>
							<ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#FE9A00] inline-block" />
              {link.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

function SocialCard({ title, href, icon }: { title: string; href: string; icon: React.ReactNode }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:bg-neutral-800/50 hover:text-white text-neutral-400 flex items-center justify-between border-t border-b border-neutral-800/50 p-6 text-sm md:border-t-0 transition-colors"
		>
			<span className="font-medium flex items-center gap-3">
        {icon}
        {title}
      </span>
			<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
		</a>
	);
}

