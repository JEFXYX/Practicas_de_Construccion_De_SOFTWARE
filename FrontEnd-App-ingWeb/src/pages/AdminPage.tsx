import React from 'react'
import { Button, StatusBadge, Avatar, Brand } from '../components/ui'
import { Users, LogOut, Plus, Search, Download, ChevronDown, Ellipsis } from 'lucide-react'

export interface AdminPageProps {
  onLogout: () => void
}

export const AdminPage: React.FC<AdminPageProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      {/* Top Navbar */}
      <header className="h-16 bg-surface border-b border-line-subtle px-8 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-6">
          <Brand size="md" />
          <span className="text-caption px-2.5 py-1 bg-surface-muted text-ink-secondary rounded-full font-medium">
            Panel de Administración
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pr-4 border-r border-line-subtle">
            <Avatar name="Admin User" tone="clay" size="sm" />
            <div className="flex flex-col">
              <span className="text-label font-semibold text-ink">Administrador</span>
              <span className="text-caption text-ink-tertiary">admin@cobre.com</span>
            </div>
          </div>
          <Button variant="ghost" size="md" leadingIcon={LogOut} onClick={onLogout}>
            Cerrar sesión
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-8 max-w-7xl w-full mx-auto flex flex-col gap-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-heading-lg font-semibold text-ink">Directorio de Clientes</h1>
            <p className="text-body text-ink-secondary">
              Gestiona y visualiza la información de tus clientes en tiempo real.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" leadingIcon={Download}>
              Exportar
            </Button>
            <Button variant="primary" leadingIcon={Plus}>
              Nuevo cliente
            </Button>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-surface border border-line-subtle rounded-card p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-tertiary" size={16} strokeWidth={1.8} />
            <input
              type="text"
              placeholder="Buscar cliente por nombre o correo..."
              className="h-search w-full pl-10 pr-4 bg-surface text-body border border-line-strong rounded-control focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button className="h-search px-3 bg-surface border border-line-strong rounded-control text-label text-ink-secondary flex items-center gap-2 hover:bg-surface-muted transition-colors">
              <span>Ordenar por: <strong>Más recientes</strong></span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Clients Table Preview */}
        <div className="bg-surface border border-line-subtle rounded-card overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-muted border-b border-line-subtle text-caption text-ink-secondary font-medium uppercase tracking-wider">
                  <th className="py-3.5 px-6">Cliente</th>
                  <th className="py-3.5 px-6">Contacto</th>
                  <th className="py-3.5 px-6">Empresa</th>
                  <th className="py-3.5 px-6">Estado</th>
                  <th className="py-3.5 px-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-subtle text-body text-ink">
                <tr className="hover:bg-surface-muted/50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar name="Valentina Rojas" tone="rose" size="md" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-ink">Valentina Rojas</span>
                        <span className="text-caption text-ink-tertiary">ID: #CL-482</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-ink-secondary">
                    <div>valentina.rojas@tallerauroramx.com</div>
                    <div className="text-caption text-ink-tertiary">+52 55 4910 2039</div>
                  </td>
                  <td className="py-4 px-6 font-medium text-ink">Taller Aurora</td>
                  <td className="py-4 px-6">
                    <StatusBadge active={true} />
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1.5 text-ink-tertiary hover:text-ink rounded-control hover:bg-surface-muted transition-colors">
                      <Ellipsis size={18} />
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted/50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar name="Mateo Carrasco" tone="clay" size="md" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-ink">Mateo Carrasco</span>
                        <span className="text-caption text-ink-tertiary">ID: #CL-483</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-ink-secondary">
                    <div>mateo@estudiocarrasco.ec</div>
                    <div className="text-caption text-ink-tertiary">+593 98 412 7731</div>
                  </td>
                  <td className="py-4 px-6 font-medium text-ink">Estudio Carrasco</td>
                  <td className="py-4 px-6">
                    <StatusBadge active={true} />
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1.5 text-ink-tertiary hover:text-ink rounded-control hover:bg-surface-muted transition-colors">
                      <Ellipsis size={18} />
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-surface-muted/50 transition-colors cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <Avatar name="Sofia Lopez" tone="sage" size="md" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-ink">Sofía López</span>
                        <span className="text-caption text-ink-tertiary">ID: #CL-484</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-ink-secondary">
                    <div>sofia.lopez@designlab.io</div>
                    <div className="text-caption text-ink-tertiary">+34 612 345 678</div>
                  </td>
                  <td className="py-4 px-6 font-medium text-ink">DesignLab</td>
                  <td className="py-4 px-6">
                    <StatusBadge active={false} />
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1.5 text-ink-tertiary hover:text-ink rounded-control hover:bg-surface-muted transition-colors">
                      <Ellipsis size={18} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
