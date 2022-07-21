import { Link } from 'react-router-dom';
import StyledSection from '../styles/StyledSection';

const Section = ({ children, title, seeAllLink, breadcrumb }) => (
    <StyledSection>
        <div className="section-inner">
            <div className="section-top">
                <h2 className="section-heading">
                    {title && (
                        <>
                            {seeAllLink ? (
                            <Link to={seeAllLink}>{title}</Link>
                            ) : (
                            <span>{title}</span>
                            )}
                        </>
                    )}
                </h2>
                {seeAllLink && (
                    <Link to={seeAllLink} className="section-see-all">See All</Link>
                )}
            </div>
            {children}
        </div>
  </StyledSection>
);

export default Section;