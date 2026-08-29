document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.album');
    let index = 0;

    if (images.length) {
        function updateAlbum() {
            images.forEach(image => image.classList.remove('center'));
            images[index].classList.add('center');
            index = (index + 1) % images.length;
        }

        setInterval(updateAlbum, 5000);
        updateAlbum();
    }

    initProductSwitcher();
});

const productDetails = {
    'psa-nitrogen': {
        category: 'Featured Product',
        title: 'PSA Nitrogen Gas Plants - MS Model',
        image: 'images/300nm3.jpg',
        imageAlt: 'PSA nitrogen gas plant',
        description: [
            'The MS model nitrogen plant operates on PSA technology with twin towers filled with special grade carbon molecular sieves. One tower remains in production while the other regenerates, helping maintain continuous nitrogen output.',
            'This model is suitable for nitrogen purity from 95% to 99.9%, with higher purity options available by increasing carbon molecular sieve quantity. It is commonly used for purging, inertizing, chemical, food, pharmaceutical, heat treatment, electronics, and synthetic fiber applications.'
        ],
        badges: ['95% - 99.999% purity range', 'PSA twin tower system', 'Industrial inerting use'],
        featureTitle: 'PSA nitrogen features',
        features: [
            ['Low noise operation', 'Designed for smoother, quieter plant performance.'],
            ['Automatic cycle control', 'Controls production and regeneration cycles reliably.'],
            ['Stable purity output', 'Built to support consistent nitrogen quality.']
        ],
        specTitle: 'PSA nitrogen model comparison',
        specs: [
            ['Name', 'PSA-UNRE', 'PSA-RE'],
            ['Gas Composition', '', ''],
            ['Nitrogen', '98% - 99.9%', '99.5% - 99.99%'],
            ['Oxygen', '0.1% - 2%', '10PPM - 500PPM'],
            ['Dew Point', '40 C - 80 C', '60 C - 80 C'],
            ['Applications', '', ''],
            ['Use', 'Inert gas for chemical, food, pharmaceutical, and coal mine fire-control applications.', 'Inert gas for chemical, food, pharmaceutical, heat treatment, electronics, and synthetic fiber industries.']
        ]
    },
    'membrane-nitrogen': {
        category: 'Nitrogen Gas Plant',
        title: 'Membrane Nitrogen Gas Plant',
        image: 'images/N2 memb.png',
        imageAlt: 'Membrane nitrogen gas plant',
        description: [
            'Membrane nitrogen systems separate nitrogen from compressed air using hollow fiber membrane technology. They are compact, simple to operate, and useful where moderate purity nitrogen is required continuously.',
            'This option is suitable for packaging, blanketing, purging, tyre inflation, and general industrial nitrogen applications where space, maintenance, and running simplicity matter.'
        ],
        badges: ['Compact layout', 'Continuous nitrogen supply', 'Low maintenance design', 'Silent operation focused'],
        featureTitle: 'Membrane nitrogen features',
        features: [
            ['Silent operation focused', 'Membrane separation keeps operation simple and quieter than many mechanical-heavy systems.'],
            ['Compact footprint', 'Useful where plant-room space is limited.'],
            ['Low maintenance', 'Fewer moving process parts help simplify routine operation.']
        ],
        specTitle: 'Membrane nitrogen key features',
        specs: [
            ['Feature', 'Typical Range', 'Best Use'],
            ['Nitrogen Purity', 'Up to 99.5%', 'General industrial applications'],
            ['Technology', 'Membrane separation', 'Compact on-site generation'],
            ['Operation', 'Automatic continuous flow', 'Low supervision usage'],
            ['Applications', 'Packaging, purging, blanketing, tyre inflation', 'Moderate purity nitrogen demand']
        ]
    },
    'psa-oxygen': {
        category: 'Oxygen Gas Plant',
        title: 'PSA Oxygen Gas Plant',
        image: 'images/o2.jpeg',
        imageAlt: 'PSA oxygen gas plant',
        description: [
            'PSA oxygen plants generate oxygen from compressed air using molecular sieve beds. The system is designed for dependable oxygen purity and steady operation.',
            'It is suitable for hospitals, healthcare support, industrial combustion, water treatment, metallurgy, and other oxygen applications.'
        ],
        badges: ['On-site oxygen generation', 'Medical and industrial use', 'Automatic control', 'Silent operation focused'],
        featureTitle: 'PSA oxygen features',
        features: [
            ['Silent operation focused', 'Configured to reduce operating noise for hospital and industrial environments.'],
            ['Automatic operation', 'Controls oxygen production cycles with minimal operator attention.'],
            ['Stable oxygen supply', 'Supports dependable on-site oxygen availability.']
        ],
        specTitle: 'PSA oxygen key features',
        specs: [
            ['Feature', 'Specification', 'Application'],
            ['Oxygen Purity', 'Typically up to 93% +/- 3%', 'Medical and industrial oxygen'],
            ['Technology', 'Pressure swing adsorption', 'Continuous oxygen generation'],
            ['Control', 'Automatic panel support', 'Stable plant operation'],
            ['Applications', 'Healthcare, welding, water treatment, combustion', 'Multi-industry use']
        ]
    },
    'vpsa-oxygen': {
        category: 'Oxygen Gas Plant',
        title: 'VPSA Oxygen Gas Plant',
        image: 'images/VPSA DIG.png',
        imageAlt: 'VPSA oxygen gas plant',
        description: [
            'VPSA oxygen plants are built for higher oxygen flow requirements with efficient adsorption and vacuum-assisted regeneration.',
            'They are a strong choice for larger industrial installations where oxygen demand is continuous and energy efficiency is important.'
        ],
        badges: ['Higher capacity option', 'Energy-conscious design', 'Industrial oxygen demand'],
        featureTitle: 'VPSA oxygen features',
        features: [
            ['High-flow design', 'Suitable for larger oxygen demand and continuous usage.'],
            ['Energy-conscious operation', 'Vacuum-assisted regeneration supports efficient oxygen production.'],
            ['Industrial reliability', 'Built for process plants and heavy-duty oxygen use.']
        ],
        specTitle: 'VPSA oxygen key features',
        specs: [
            ['Feature', 'Specification', 'Best Use'],
            ['Oxygen Purity', 'Industrial oxygen range', 'Large-volume demand'],
            ['Technology', 'Vacuum pressure swing adsorption', 'Efficient generation'],
            ['Capacity', 'Higher flow configuration', 'Industrial plants'],
            ['Applications', 'Metallurgy, water treatment, combustion, process use', 'Continuous oxygen supply']
        ]
    },
    'ammonia-cracker': {
        category: 'Gas Generation',
        title: 'Ammonia Cracker Unit',
        image: 'images/ammonia-cracker-unit-500x500.webp',
        imageAlt: 'Ammonia cracker unit',
        description: [
            'Ammonia cracker units generate a hydrogen and nitrogen gas mixture by cracking ammonia under controlled process conditions.',
            'They are commonly used in heat treatment furnaces, bright annealing, brazing, and applications that need reducing atmosphere gas.'
        ],
        badges: ['Hydrogen-nitrogen mixture', 'Heat treatment use', 'Process gas support'],
        featureTitle: 'Ammonia cracker features',
        features: [
            ['Reducing atmosphere support', 'Produces a hydrogen-nitrogen mixture for furnace applications.'],
            ['Process stability', 'Designed for controlled cracking and gas delivery.'],
            ['Heat treatment ready', 'Useful for bright annealing, brazing, and related applications.']
        ],
        specTitle: 'Ammonia cracker key features',
        specs: [
            ['Feature', 'Specification', 'Application'],
            ['Output Gas', 'Hydrogen and nitrogen mixture', 'Reducing atmosphere'],
            ['Use Case', 'Heat treatment and annealing', 'Furnace applications'],
            ['System', 'Cracker unit with catalyst support', 'Process gas generation'],
            ['Applications', 'Brazing, bright annealing, heat treatment', 'Industrial furnace work']
        ]
    },
    'control-panel': {
        category: 'Automation',
        title: 'Industrial Control Panel',
        image: 'images/PANEL.jpeg',
        imageAlt: 'Industrial control panel',
        description: [
            'Control panels help operators monitor and manage gas generation equipment with safer electrical distribution and organized automation.',
            'Panels can be configured for plant controls, alarms, instrumentation, and reliable day-to-day operation.'
        ],
        badges: ['Cleaner automation', 'Operator friendly', 'Alarm and control support'],
        featureTitle: 'Control panel features',
        features: [
            ['Operator friendly layout', 'Controls and indicators are arranged for easier daily operation.'],
            ['Alarm support', 'Helps highlight operating faults and plant conditions.'],
            ['Custom build', 'Panel configuration can match plant equipment requirements.']
        ],
        specTitle: 'Control panel key features',
        specs: [
            ['Feature', 'Specification', 'Benefit'],
            ['Panel Type', 'Custom electrical and automation panels', 'Plant-specific operation'],
            ['Controls', 'Switchgear, instrumentation, alarms', 'Safer monitoring'],
            ['Build', 'Industrial cabinet configuration', 'Durable installation'],
            ['Applications', 'Gas plants, compressors, dryers, process equipment', 'Centralized control']
        ]
    },
    'storage-tank': {
        category: 'Storage',
        title: 'Industrial Storage Tank',
        image: 'images/STORAGE TANK.jpeg',
        imageAlt: 'Industrial storage tank',
        description: [
            'Industrial storage tanks support gas plant infrastructure by providing reliable storage and process buffering.',
            'They are used with oxygen, nitrogen, compressed air, and supporting plant systems based on project requirements.'
        ],
        badges: ['Project-based sizing', 'Industrial fabrication', 'Plant infrastructure support'],
        featureTitle: 'Storage tank features',
        features: [
            ['Project-based sizing', 'Tank selection can be matched to storage and process needs.'],
            ['Durable fabrication', 'Built for industrial plant environments.'],
            ['System buffering', 'Supports smoother plant operation and storage availability.']
        ],
        specTitle: 'Storage tank key features',
        specs: [
            ['Feature', 'Specification', 'Benefit'],
            ['Type', 'Industrial storage tank', 'Plant support'],
            ['Material', 'Project-specific fabrication', 'Durability'],
            ['Use', 'Storage and buffering', 'Stable system operation'],
            ['Applications', 'Gas plants, air systems, process support', 'Complete infrastructure']
        ]
    }
};

function initProductSwitcher() {
    const cards = document.querySelectorAll('.product-card[data-product]');
    const rail = document.querySelector('.product-catalog');
    const railControls = document.querySelectorAll('.rail-control[data-rail]');
    const detail = document.querySelector('#product-detail');
    const category = document.querySelector('#product-category');
    const title = document.querySelector('#product-title');
    const description = document.querySelector('#product-description');
    const badges = document.querySelector('#product-badges');
    const featureTitle = document.querySelector('#feature-title');
    const features = document.querySelector('#product-features');
    const image = document.querySelector('#product-image');
    const specTitle = document.querySelector('#spec-title');
    const specBody = document.querySelector('#spec-table-body');

    if (!cards.length || !rail || !detail || !category || !title || !description || !badges || !featureTitle || !features || !image || !specTitle || !specBody) {
        return;
    }

    function activateProduct(card, shouldScrollDetail = true) {
        const product = productDetails[card.dataset.product];

        if (!product) {
            return;
        }

        cards.forEach(item => {
            item.classList.remove('is-active');
            item.setAttribute('aria-pressed', 'false');
        });

        card.classList.add('is-active');
        card.setAttribute('aria-pressed', 'true');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        detail.classList.add('is-changing');

        window.setTimeout(() => {
            category.textContent = product.category;
            title.textContent = product.title;
            description.innerHTML = product.description.map(text => `<p>${text}</p>`).join('');
            badges.innerHTML = product.badges.map(text => `<span>${text}</span>`).join('');
            featureTitle.textContent = product.featureTitle;
            features.innerHTML = product.features.map(feature => `<div><strong>${feature[0]}</strong><span>${feature[1]}</span></div>`).join('');
            image.src = product.image;
            image.alt = product.imageAlt;
            specTitle.textContent = product.specTitle;
            specBody.innerHTML = product.specs.map((row, rowIndex) => {
                const isSectionRow = row.slice(1).every(cell => cell === '');

                if (isSectionRow) {
                    return `<tr><th colspan="3">${row[0]}</th></tr>`;
                }

                const cellTag = rowIndex === 0 ? 'th' : 'td';
                return `<tr>${row.map(cell => `<${cellTag}>${cell}</${cellTag}>`).join('')}</tr>`;
            }).join('');
            detail.classList.remove('is-changing');
            if (shouldScrollDetail) {
                detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 140);
    }

    railControls.forEach(control => {
        control.addEventListener('click', () => {
            const currentIndex = Array.from(cards).findIndex(card => card.classList.contains('is-active'));
            const direction = control.dataset.rail === 'next' ? 1 : -1;
            const nextIndex = (currentIndex + direction + cards.length) % cards.length;

            activateProduct(cards[nextIndex], false);
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            activateProduct(card);
        });
    });
}

function showSildebar() {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
        sidebar.style.display = 'none';
    }
}

/*function showContent() {
    const productBody= document.querySelector('.productBody')
    productBody.style.display = 'flex'
}
function hideContent() {
    const productBody= document.querySelector('.productBody')
    productBody.style.display = 'none'
}*/
function toggleMenu(index) {
    const submenus = document.querySelectorAll(".subMenu, .submenus");

    submenus.forEach((submenu, i) => {
        if (i === index) {
            submenu.classList.toggle("open");
        } else {
            submenu.classList.remove("open");
        }
    });
}

function showBar() {
    const sidebar = document.querySelector('.secBar');

    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}

function hideBar() {
    const sidebar = document.querySelector('.secBar');

    if (sidebar) {
        sidebar.style.display = 'none';
    }
}

function toggleSubMenu(button) {
    const submenu = button.nextElementSibling;

    if (submenu) {
        submenu.classList.toggle('show');
        button.classList.toggle('rotate');
    }
}
