# Roadroller

`roadroller`は、負荷試験のための`loadtest`ツールの使い勝手を向上させるスクリプトです。

## 特徴

- `loadtest`の機能を拡張し、より簡単に負荷試験を実行できます。

## インストール手順

### 前提条件

- `nodenv`がインストールされていること。

#### nodenvのインストール

`nodenv`がまだインストールされていない場合は、以下の手順に従ってインストールしてください。

```sh
# nodenvのインストール
git clone https://github.com/nodenv/nodenv.git ~/.nodenv
cd ~/.nodenv && src/configure && make -C src

# nodenvのパスを設定
echo 'export PATH="$HOME/.nodenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(nodenv init -)"' >> ~/.bashrc
exec $SHELL

# node-buildのインストール
git clone https://github.com/nodenv/node-build.git $(nodenv root)/plugins/node-build
```

#### Roadrollerのインストール

1. リポジトリをクローンします。

```sh
git clone https://github.com/yourusername/roadroller.git
cd roadroller
```

2. nodenvを使用して、必要なNode.jsバージョンをインストールします。

```sh
nodenv install
```

3. 依存関係をインストールします。

```sh
pnpm i
```

## 使い方

### 負荷試験の実行

1. .envファイルを作成し、環境変数を設定します。

2. 以下のコマンドで負荷試験を実行します。

```sh
pnpm start
```
