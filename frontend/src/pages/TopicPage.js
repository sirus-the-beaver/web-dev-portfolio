// Import dependencies
import React from 'react';

function TopicPage() {
    return (
        <>
            <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#design">Frontend Design</a>
                <a href="#image-optimization">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
            </nav>
            <article id="servers">
                <h3>Web Servers</h3>
                <p>
                    <strong>Index</strong> is used as the default file name for the designated homepage of a website that's stored on a web server. This file is placed within the root directory of the web application.
                    Although, it should be noted that some web servers allow for other file names for the designated homepage. This website is hosted on an Apache web server which uses the default
                    index.html file name. On a server such as Microsoft's .NET platform, you're allowed to name the designated homepage file as default.html. In other cases, the server might even look
                    for an index.js or index.php as the designated homepage of the website.
                </p>
                <p>
                    When inspecting this webpage from a file stored on my <strong>local computer</strong>, I notice differences in the request and response compared to when I inspect the webpage stored on the <strong>web server</strong>.
                    Firstly, the "Request URL" is different; for the local file, it shows the path to the file on my computer with "file" as the scheme in the URL, whereas the URL for the file on the server 
                    shows the path to the file from the "public_html" folder stored on the server, with "https" as the scheme and "web.engr.oregonstate.edu" as the domain. Additionally, there's a remote address
                    shown in the request for the file on the web server, whereas there isn't for the file on my local computer. This remote address is the IP address of the web server followed by the port number. 
                    As for the request method, both files show "GET". For the status, both files show status 200. Finally, for the response body, it's the exact same for both files.
                </p>
                <p>
                    The <strong>favicon.ico</strong> file has a status 200 since the favicon.ico file is automatically added to my ENGR web server. On the other hand, the <strong>main.css</strong> and <strong>main.js</strong> files have status 400 since 
                    these files do not exist/aren't stored on the web server, yet these files are inherently requested since they are included in the HTML document for this webpage.
                </p>
                <p>
                    The <strong>scheme</strong> for this URL on the web server is https. The <strong>subdomain</strong> for this URL is web.engr. The <strong>host domain</strong> is oregonstate.edu. Finally, the <strong>resources</strong> of this URL is /~salaris/a1-salaris/.
                </p>
            </article>
            <article id="design">
                <h3>Frontend Design</h3>
                <p>
                    The frontend of a website is everything that is viewable within the viewport of the browser. This includes HTML content and media (such as images, videos, etc.), the CSS styling, and the 
                    underlying embedded JavaScript that allows for dynamic webpages. The concept of <strong>frontend design</strong> relates to creating an appropriate experience for the users of the given website. 
                    Frontend design touches on various aspects of the user experience on a web application including the visual design, the graphical user interface, and the interactive experience. As for the 
                    visual design, a website should have a consistent color scheme, font and typography scheme, and image/illustration scheme. Additionally, a website should have a navigation system that 
                    inherently makes sense for users. Due to changes in tastes and preferences by users, frontend design tends to follow common trends that may change over time. Therefore, it is important for 
                    developers to stay on top of the latest trends in frontend design. The measure of the quality of a user's experience while using a product or service such as a web app is referred to as the 
                    usability or inclusivity of the product or service. There are multiple factors that affect the usability metric of a website. The World Usability Day's 2022 gives a list of the <strong>Five "E's"</strong> of usability. 
                    They include the following:
                </p>
                <dl>
                    <strong><dt>Effective</dt></strong>
                    <dd>
                        The measure of how well a user is able to meet their goals and end up with accurate results.
                    </dd>
                    <strong><dt>Efficient</dt></strong>
                    <dd>
                        The measure of how fast a user is able to perform a given task. Efficiency is typically achieved by reducing the amount of unnecessary steps for users.
                    </dd>
                    <strong><dt>Easy to navigate</dt></strong>
                    <dd>
                        The measure of how simple it is for a user to navigate the website. This includes the ability for a user to be able to immediately understand how to achieve their given goal on the website.
                    </dd>
                    <strong><dt>Error-free</dt></strong>
                    <dd>
                        The measure of how well a website is able to avoid accessibility and availability issues. Developers can reduce errors by researching the common errors experienced by users.
                    </dd>
                    <strong><dt>Enjoyable</dt></strong>
                    <dd>
                        The measure of how well the website fits the unique needs of the intended audience in both the content and design of the website.
                    </dd>
                </dl>
                <p>
                    To prevent developers from only using the generic div block-level tag to create sections of content for a webpage, HTML 5 introduced new tags specifically for breaking up the layout of a page. 
                    These tags are referred to as <strong>page-layout tags</strong>; these tags include the header tag, nav tag, main tag, section tag, article tag, aside tag, and footer tag. Not only do these tags help developers 
                    create a consistent webpage layout, but they also improve the readability for machines such as web crawlers and screen readers. The header tag is used at the top of the page and typically contains 
                    the name, publisher, and/or marketing slogan. The nav tag is a section below the header that contains links to other webpages on the website as well as a search bar and tools/settings. The main 
                    tag comes after the nav tag, and it's treated as the primary container for all of the main content on the webpage. The section tag is used throughout the webpage to make thematic groupings 
                    of content. Typically, the first child of a section tag is a h1 tag that describes what's in the section. The article tag is placed within a section tag and denotes a single, specific topic with a 
                    h2 headline to describe the content. The aside tag typically is used to include content related to an article and it usually floats to the side of the given article. Finally, the footer tag 
                    is at the bottom of the webpage, and it usually contains legal information, contact information, and links to pages such as a privacy policy, cookie policy, and terms and conditions. Throughout 
                    a webpage, there are <strong>anchor tags</strong> inserted to link to internal sections of a webpage, link to other pages on the website, or links to external websites. Below, I've described how anchor tags are 
                    used to accomplish each of those goals.
                </p>
                <ol>
                    <li>
                        Anchor tags link to external content through the use of a special attribute called href. The href is set to a URL, which is the URL that a user will be taken to after they 
                        click the anchor tag. It's best practice to include a descriptive name for the text that's used to hyperlink the URL so users know where the link will generally take them.
                    </li>
                    <li>
                        Anchors can also link to other webpages on the website using the same href attribute that's used to link to external websites. These anchors are typically placed within the 
                        nav bar at the top of each of the webpages of a website.
                    </li>
                    <li>
                        Finally, anchors can also link to content that's contained on the same webpage. While the href attribute is used to link to internal content, instead of placing the URL of a webpage or website,
                         the name of a defined id attribute used by an internal tag is used preceded by the pound sign (#). For example, if article tag has its id attribute set to "topic", then an anchor tag can link to 
                         that article by setting href to "#topic".
                    </li>
                </ol>
            </article>
            <article id="image-optimization">
                <h3>Optimizing Images</h3>
                <p>
                    There are six major specifications for optimized images on the web. The specifications are descriptive file naming, small file sizing, exact dimensions, correct file formatting, 
                    reduced resolution, and color mode. Descriptive file naming is the practice of naming image files with appropriate descriptions for the given image, and this is important for improving 
                    search engine optimization (SEO). Small file sizing is important to optimize the webpages' loading speed. With lossless image compression techniques, image file sizes can appropriately be resized 
                    without compromising quality of the image. Similar resizing images to smaller widths and heights will also optimize the webpage loading speed. It's best practice to crop out unnecessary parts of 
                    an image and reduce the dimensions to fit in the exact space of the webpage that the image will be located. As for file formatting, photos are usually JPG, and line-art images such as logos and icons 
                    are usually GIF or 8-bit PNG. To optimize the resolution of images across devices, it's best practice to provide multiple image sizes for each standard resolution. The range of common screen resolutions is 
                    between 72 and 300 ppi. Finally, the color mode for PNG, JPG, SVG, and WebP images should be RGB color mode, and GIF images should be Indexed color mode.
                </p>
                <p>
                    It's best for general photos to be saved as JPG or WebP file formats. This is because JPG and WebP file formats are able to compress down to small file sizes and remain rectangular. 
                    On the other hand, line-art images should be saved as PNG, SVG, or GIF file formats. SVG files are mathematically derived and optimized for two-dimensional, interactive, or animated images. 
                    GIF files are great for line-art as well due to the ability of GIFs to have 8-bit transparency or animation. Finally, PNG files are another great choice for line-art images since PNG files 
                    have true transparency.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    Favicons, or touch icons, are small images representative of a logo. These images serve to identify a website in a browser tab, search engine results, or other devices such as smartphones. 
                    To start, a symbol such as a logo is modified for a range of different contexts and devices. Next, the files are linked within the HTML file(s), and the browser will pick up these files and save the 
                    icons and anchor to a bookmark or a search engine result.
                </p>
            </article>
        </>
    );
}
export default TopicPage;