-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "senha" VARCHAR(100) NOT NULL,
    "ativo" BOOLEAN DEFAULT true,
    "id_grupo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "cpf" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atendente" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "cpf" TEXT,

    CONSTRAINT "Atendente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GrupoToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_key" ON "Usuario"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_key" ON "Cliente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_id_usuario_unique" ON "Cliente"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Atendente_id_key" ON "Atendente"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Atendente_id_usuario_unique" ON "Atendente"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_id_key" ON "Grupo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_GrupoToUsuario_AB_unique" ON "_GrupoToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_GrupoToUsuario_B_index" ON "_GrupoToUsuario"("B");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_id_grupo_fkey" FOREIGN KEY ("id_grupo") REFERENCES "Grupo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Atendente" ADD CONSTRAINT "Atendente_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "_GrupoToUsuario" ADD FOREIGN KEY ("A") REFERENCES "Grupo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GrupoToUsuario" ADD FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
