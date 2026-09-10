import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ChapterHeader, Tag, Paragraphs, renderTitle } from "./ui";
import { Reveal } from "../lib/motion";
import { mapSection } from "../content";

const locations: Record<string, { lat: number; lng: number }> = {
  tiuma: { lat: -8.0644, lng: -35.0362 },
  olinda: { lat: -8.0089, lng: -34.8553 },
  santo: { lat: -8.0508, lng: -34.9002 },
  boa: { lat: -8.0604, lng: -34.8893 },
  derby: { lat: -8.0627, lng: -34.9061 },
  parque: { lat: -8.0578, lng: -34.8916 },
  recife: { lat: -8.0632, lng: -34.8711 },
  restauracao: { lat: -8.0473, lng: -34.8995 },
};

const mapCenter: L.LatLngExpression = [-8.045, -34.91];

function markerIcon(selected: boolean) {
  return L.divIcon({
    className: "perna-map-marker",
    html: `<span class="perna-map-dot ${selected ? "is-selected" : ""}"><i></i></span>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
}

export default function MapSection() {
  const [sel, setSel] = useState(mapSection.points[0]);
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerLayers = useRef<Record<string, L.Marker>>({});
  const { points } = mapSection;
  const selectedIndex = points.findIndex((point) => point.id === sel.id);

  useEffect(() => {
    if (!mapElement.current || mapInstance.current) return;

    const map = L.map(mapElement.current, {
      center: mapCenter,
      zoom: 11,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    L.control.zoom({ position: "topright" }).addTo(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const route = points
      .map((point) => locations[point.id])
      .filter(Boolean)
      .map((location) => [location.lat, location.lng] as L.LatLngExpression);

    L.polyline(route, {
      color: "#8a1e16",
      opacity: 0.72,
      weight: 2,
      dashArray: "5 8",
    }).addTo(map);

    points.forEach((point) => {
      const location = locations[point.id];
      if (!location) return;

      const marker = L.marker([location.lat, location.lng], {
        icon: markerIcon(point.id === sel.id),
        title: point.name,
      }).addTo(map);

      marker.bindTooltip(point.name.split("·")[0].trim(), {
        direction: "top",
        offset: [0, -10],
        className: "perna-map-tooltip",
      });

      marker.on("click", () => setSel(point));
      markerLayers.current[point.id] = marker;
    });

    mapInstance.current = map;
    window.setTimeout(() => map.invalidateSize(), 150);

    return () => {
      map.remove();
      mapInstance.current = null;
      markerLayers.current = {};
    };
  }, [points]);

  useEffect(() => {
    Object.entries(markerLayers.current).forEach(([id, marker]) => {
      marker.setIcon(markerIcon(id === sel.id));
    });

    const location = locations[sel.id];
    if (mapInstance.current && location) {
      mapInstance.current.flyTo([location.lat, location.lng], 12, {
        duration: 0.65,
      });
    }
  }, [sel]);

  return (
    <section id="mapa" className="relative overflow-hidden px-5 py-24 sm:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <ChapterHeader no="11" kicker="mapa do Recife" title={renderTitle(mapSection.heading)} />
        <Reveal>
          <Paragraphs text={mapSection.lead} className="max-w-3xl text-xl text-bone/90" />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(290px,0.7fr)]">
          <Reveal>
            <div className="overflow-hidden border border-bone/20 bg-[#11100c] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <div className="flex items-center justify-between border-b border-bone/15 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bloodsoft/50 font-serif text-base text-bloodsoft">11</span>
                  <div>
                    <p className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-bone/80">Cartografia real</p>
                    <p className="mt-1 font-serif text-lg text-paper">Recife e Região Metropolitana</p>
                  </div>
                </div>
                <span className="hidden font-mono text-[0.72rem] uppercase tracking-[0.18em] text-stone sm:block">ruas e limites · escala atual</span>
              </div>

              <div ref={mapElement} className="real-map relative h-[430px] w-full sm:h-[520px]" aria-label="Mapa interativo do Recife e Região Metropolitana" />

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-bone/15 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-stone">
                  <span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-bloodsoft shadow-[0_0_9px_rgba(138,30,22,.8)]" /> local selecionado</span>
                  <span className="flex items-center gap-2"><i className="h-px w-5 border-t border-dashed border-bloodsoft" /> percurso cultural</span>
                </div>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-stone">{mapSection.mapNote}</span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full min-h-[390px] flex-col border border-bone/20 bg-[#17150f] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-bone/15 pb-4">
                <span className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-bloodsoft">Fragmento selecionado</span>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-stone">{String(selectedIndex + 1).padStart(2, "0")} / {String(points.length).padStart(2, "0")}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={sel.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }} className="flex flex-1 flex-col pt-7">
                  <div className="flex items-center gap-3"><Tag className="text-bloodsoft">{sel.tag}</Tag><span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-stone">ponto de memória</span></div>
                  <h3 className="mt-5 font-serif text-4xl leading-tight text-paper">{sel.name}</h3>
                  <p className="mt-5 text-[1.1rem] leading-[1.7] text-[#c6bda2]">{sel.frag}</p>
                  <div className="mt-auto pt-10"><div className="mb-4 h-px w-12 bg-bloodsoft/80" /><p className="max-w-xs font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-stone">Mapa baseado em cartografia real. O registro cultural não prova ocorrências sobrenaturais.</p></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
