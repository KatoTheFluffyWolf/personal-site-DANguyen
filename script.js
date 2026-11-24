// Render one page from the bilingual content stored in content.js.
const byId = id => document.getElementById(id);
let language = 'en';
const local = value => typeof value === 'string' ? value : value[language];
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function makeLink(item, className) {
  const link = element('a', local(item.label), className);
  link.href = item.url;
  if (/^https?:/.test(item.url)) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
  return link;
}
const contactIcons = {
  document: '<path d="M5 3h10l4 4v14H5zM14 3v5h5M8 12h8M8 16h8"/>',
  Email: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/>',
  'Google Scholar': '<path d="m2 9 10-5 10 5-10 5zM6 11v5c4 3 8 3 12 0v-5M22 9v7"/>',
  ORCID: '<circle cx="12" cy="12" r="9"/><path d="M8 10v6M8 7v1M11 10h2a3 3 0 0 1 0 6h-2z"/>',
  GitHub: '<path d="M8 19c-4 1-4-2-6-2M15 21v-4c0-1 .3-1.5.8-2-2.7-.3-5.5-1.3-5.5-6a4.5 4.5 0 0 1 1.2-3.1A4 4 0 0 1 11.6 3s1-.3 3.2 1.2a11 11 0 0 1 5 0C22 2.7 23 3 23 3" transform="translate(-2 0) scale(.94)"/><path d="M9 20v-3c0-1-.3-1.5-.8-2C5.5 14.7 3 13.7 3 9a4.5 4.5 0 0 1 1.2-3.1A4 4 0 0 1 4.3 3s1-.3 3.2 1.2M19 5.9A4.5 4.5 0 0 1 20 9c0 4.7-2.5 5.7-5.2 6"/>',
  LinkedIn: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M7 10v7M7 7v1M11 17v-7m0 3a3 3 0 0 1 6 0v4"/>',
  'ACL Anthology': '<path d="M3 5h7l2 2 2-2h7v14h-7l-2 2-2-2H3zM12 7v14"/>'
};
function contactIcon(item) {
  const span = element('span', '', 'contact-symbol');
  span.setAttribute('aria-hidden', 'true');
  const drawing = contactIcons[item.icon || item.label] || contactIcons.document;
  // Only fixed, local icon definitions are inserted as markup.
  span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${drawing}</svg>`;
  return span;
}
function render() {
  const t = TEXT[language];
  document.documentElement.lang = language;
  document.title = `${local(SITE.name)} | ${t.footer}`;
  document.querySelectorAll('[data-lang]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });
  byId('name').textContent = local(SITE.name);
  byId('role').textContent = local(SITE.role);
  byId('bio').textContent = local(SITE.bio);
  byId('overview-heading').textContent = t.overview;
  const talk = SITE.talk;
  byId('talk-section').hidden = !talk.enabled;
  byId('talk-heading').textContent = local(talk.heading);
  byId('talk-description').textContent = local(talk.description);
  const talkAction = byId('talk-action');
  talkAction.replaceChildren();
  const formUrl = talk.formUrl.trim();
  const hasForm = /^https:\/\//i.test(formUrl);
  if (hasForm) {
    talkAction.append(makeLink({ label: talk.button, url: formUrl }, 'button talk-button'));
  } else {
    const button = element('button', local(talk.button), 'talk-button');
    button.type = 'button';
    button.disabled = true;
    talkAction.append(button);
  }
  byId('talk-note').textContent = local(hasForm ? talk.activeNote : talk.pendingNote);
  byId('affiliation-heading').textContent = t.affiliation;
  byId('contact-heading').textContent = t.contact;
  byId('pub-heading').textContent = t.publications;
  byId('achievement-heading').textContent = t.achievements;
  const portrait = byId('portrait');
  portrait.replaceChildren();
  if (SITE.photo) {
    const image = element('img');
    image.src = SITE.photo;
    image.alt = local(SITE.name);
    portrait.append(image);
  } else {
    portrait.append(element('div', 'DAN', 'initials'), element('div', t.photo, 'photo-label'));
  }
  const affiliation = byId('affiliation');
  affiliation.replaceChildren(...SITE.education.map(item => {
    const entry = element('div');
    entry.append(element('p', local(item.title), 'affiliation-title'), element('p', local(item.detail), 'affiliation-detail'));
    return entry;
  }));
  const contacts = element('ul', '', 'contact-list');
  SITE.contacts.forEach(item => {
    const li = element('li');
    li.append(contactIcon(item));
    if (item.url) li.append(makeLink(item));
    else {
      const missing = element('span', local(item.label), 'missing');
      missing.title = t.missing;
      li.append(missing);
    }
    contacts.append(li);
  });
  byId('contact').replaceChildren(contacts);
  if (SITE.contacts.some(item => !item.url)) byId('contact').append(element('p', t.contactNote, 'contact-note'));
  byId('publications').replaceChildren(...SITE.publications.map(pub => {
    const entry = element('article', '', 'entry');
    const title = element('h3', pub.title);
    title.lang = 'en';
    const venue = element('p', pub.venue, 'venue');
    venue.lang = 'en';
    const actions = element('div', '', 'actions');
    pub.links.filter(item => item.url).forEach(item => actions.append(makeLink(item, 'button')));
    entry.append(title, element('p', pub.authors, 'authors'), venue, element('p', local(pub.description), 'description'), actions);
    return entry;
  }));
  const achievements = element('ul', '', 'achievement-list');
  SITE.achievements.forEach(item => achievements.append(element('li', local(item))));
  byId('achievements').replaceChildren(achievements);
  byId('footer').textContent = `© ${new Date().getFullYear()} ${local(SITE.name)} · ${t.footer}`;
}
function setLanguage(value) {
  language = value === 'vi' ? 'vi' : 'en';
  try { localStorage.setItem('academic-resume-language', language); } catch (_) {}
  try {
    const url = new URL(location.href);
    url.searchParams.set('lang', language);
    history.replaceState(null, '', url);
  } catch (_) {}
  render();
}
let saved = null;
try { saved = localStorage.getItem('academic-resume-language'); } catch (_) {}
const requested = new URLSearchParams(location.search).get('lang');
language = (requested || saved) === 'vi' ? 'vi' : 'en';
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
render();
