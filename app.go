package main

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (b *App) startup(ctx context.Context) {
	b.ctx = ctx
}

func (b *App) Minimize() {
	runtime.WindowMinimise(b.ctx)
}

func (b *App) Unmaximize() {
	runtime.WindowUnmaximise(b.ctx)
}

func (b *App) Maximize() {
	runtime.WindowMaximise(b.ctx)
}

func (b *App) Close() {
	runtime.Quit(b.ctx)
}
