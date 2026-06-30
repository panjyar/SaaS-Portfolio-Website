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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00A755]/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="relative mx-auto max-w-7xl px-4 py-16">
				<div className="relative grid grid-cols-1 border-x border-neutral-800/50 md:grid-cols-4 md:divide-x md:divide-neutral-800/50 gap-y-8 md:gap-y-0">
					{/* Column 1: Products */}
					<div>
						<SocialCard title="LinkedIn" href="https://www.linkedin.com/company/livnsense-technologies-pvt-ltd" icon={<Linkedin className="w-4 h-4" />} />
						<LinksGroup
							title="Products"
							titleHref="/#products"
							links={[
								{ title: 'VICAS', href: '/products/vicas' },
								{ title: 'Safety Monitoring', href: '/products/vicas#safety-monitoring' },
								{ title: 'GreenOps', href: '/products/greenops' },
								{ title: 'Energy Optimization', href: '/products/greenops#energy-optimization' },
								{ title: 'Carbon Intelligence', href: '/products/greenops#carbon-intelligence' },
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
                  { title: 'Safety & PPE', href: '#' },
                  { title: 'Quality Inspection', href: '#' },
                  { title: 'Decarbonization', href: '#' },
                  { title: 'Energy Efficiency', href: '#' },
                  { title: 'Digital Twin', href: '#' },
				  { title: 'Real-Time Analytics', href: '#' },
				  { title: 'Smart City' , href:'#'} 
                ]}
              />
              <LinksGroup 
                title="Industries"
                titleHref="/industries"
                links={[
                  { title: 'Cement', href: '/industries/cement' },
                  { title: 'Steel & Mining', href: '/industries/steel-mining' },
                  { title: 'Oil & Gas', href: '/industries/oil-gas' },
                  { title: 'Chemicals & Pharma', href: '/industries/chemicals-pharma' },
				  { title: 'Railways', href: '/industries/railways'},
				  { title: 'Ports', href: '/industries/ports'},
				  { title: 'Manufacturing', href: '/industries/manufacturing'},
				  { title: 'Warehouses', href: '/industries/warehouses'},
				  { title: 'Food', href: '/industries/food'},
				  { title: 'Construction', href: '/industries/construction'},
				  { title: 'Power & Utilities', href: '/industries/power-utilities'}
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
                  { title: 'AI & Machine Learning', href: '#' },
                  { title: 'Industrial IoT', href: '#' },
                  { title: 'Edge AI', href: '#' },
                ]}
              />
              <LinksGroup
                title="Case Studies"
                links={[
                  { title: 'Customer Success', href: '#' },
                  { title: 'Industry Results', href: '#' },
                  { title: 'ROI & Impact', href: '#' },
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
                  { title: 'Blog', href: '#' },
                  { title: 'Events', href: '/resources/events' },
                  { title: 'Awards & Recognition', href: '/resources/awards' },
                  { title: 'Podcasts', href: '/resources/prodcasts' },
                ]}
              />
            </div>
					</div>
				</div>
			</div>
			<div className="flex justify-center border-t border-neutral-800 p-6 bg-[#0a0a0a]">
				<p className="text-neutral-500 text-sm">
					© {new Date().getFullYear()} LivNSense GreenOps Private Limited. All rights reserved. | <Link href="#" className="hover:text-[#00A755] transition-colors">Privacy</Link> | <Link href="#" className="hover:text-[#00A755] transition-colors">Terms</Link>
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
				<Link href={titleHref} className="block text-[#00A755] mt-2 mb-6 text-xs font-extrabold tracking-widest uppercase hover:underline">
					{title}
				</Link>
			) : (
				<h3 className="text-[#00A755] mt-2 mb-6 text-xs font-extrabold tracking-widest uppercase">
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
							<ArrowRight className="h-3 w-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#00A755] inline-block" />
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
