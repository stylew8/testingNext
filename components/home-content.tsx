'use client';

import { ArrowDown, Mail, MapPin, Phone, SprayCan } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function HomeContent() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryImages = [
    'https://as2.ftcdn.net/v2/jpg/00/45/28/87/1000_F_45288765_mBk4OHfYbiEn0gSuDYgtOPT5Ekax73Yj.jpg',
    'https://study.com/cimages/multimages/16/640px-graffitis_a_courbevoie_03_11046415886389526609.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIOzEsRa1utnFV0BJ_M1S7M4R9RsVDnnQFdDTd-egVU3pApd_sFmhlKYZy3YWNqI0lCU&usqp=CAU',
    'https://images.squarespace-cdn.com/content/v1/58bdbb618419c2e3d2d32a86/1577462114265-PJ23S73OHCE0W895LTFX/IMG_4565.jpg',
    'https://i.pinimg.com/736x/09/31/aa/0931aa57e5e65e1e32a84a62305a1796.jpg',
    'https://i.pinimg.com/736x/ef/c3/c1/efc3c1814d023d0e5c2bc2af58453486.jpg',
  ];

  return (
    <main className="min-h-screen">
      {/* Hero sekcija */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1487452066049-a710f7296400?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZmZpdGl8ZW58MHx8MHx8fDA%3D"
            alt="Graffiti meno fonas"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <SprayCan className="w-16 h-16 text-primary" />
            <h1 className="text-6xl font-bold tracking-tight">Urban Art Studio</h1>
          </div>
          <p className="text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Paverčiame tuščias sienas į meno kūrinius. Profesionalus grafiti jūsų verslui ir asmeninei erdvei.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full transition-all transform hover:scale-105 text-lg font-semibold"
          >
            Užsisakyti grafitį
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Galerijos sekcija */}
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Mūsų darbai</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Kiekvienas projektas unikalus ir kuriamas atsižvelgiant į jūsų pageidavimus bei erdvės ypatumus.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((url, index) => (
              <div 
                key={index} 
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setActiveImage(url)}
              >
                <Image
                  src={url}
                  alt={`Graffiti meno pavyzdys ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Peržiūrėti</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kainų sekcija */}
      <section id="pricing" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Mūsų paketai</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Pasirinkite tinkamą paslaugų paketą arba susisiekite su mumis dėl individualaus pasiūlymo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Bazinis',
                price: '500',
                features: [
                  'Iki 10 kv. metrų',
                  'Pagrindinė dizaino konsultacija',
                  '2 pataisymai',
                  'Vykdymo laikas: 1-2 dienos',
                  'Garantija 1 metai'
                ],
              },
              {
                name: 'Pažengęs',
                price: '700',
                features: [
                  'Iki 25 kv. metrų',
                  'Išplėstinė konsultacija',
                  '4 pataisymai',
                  'Vykdymo laikas: 2-3 dienos',
                  'Skaitmeninis maketas',
                  'Garantija 2 metai'
                ],
              },
              {
                name: 'Premium',
                price: '990',
                features: [
                  'Iki 50 kv. metrų',
                  'Premium konsultacija',
                  'Neriboti pataisymai',
                  'Vykdymo laikas: 3-5 dienos',
                  'Skaitmeninis maketas',
                  'Proceso vaizdo įrašas',
                  'Garantija 3 metai'
                ],
              },
            ].map((plan, index) => (
              <div 
                key={plan.name} 
                className={`bg-card p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${
                  index === 1 ? 'border-2 border-primary relative' : ''
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Populiariausias pasirinkimas
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price} €
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-lg transition-colors ${
                    index === 1
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                  }`}
                >
                  Pasirinkti paketą
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontaktų sekcija */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Susisiekite su mumis</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Palikite užklausą, ir mes susisieksime su jumis aptarti jūsų projektą
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Kontaktinė informacija</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefonas</p>
                    <p className="text-lg">+370 (999) 999-45</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">El. paštas</p>
                    <p className="text-lg">contact@urbanartstudio.lt</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Adresas</p>
                    <p className="text-lg">Vinius, Vilniaus g., 123</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Vardas</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">El. paštas</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Žinutė</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-lg transition-all transform hover:scale-105 font-semibold"
              >
                Siųsti žinutę
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Nuotraukos modalas */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-5xl w-full aspect-square">
            <Image
              src={activeImage}
              alt="Padidinta galerijos nuotrauka"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
