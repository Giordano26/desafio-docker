FROM golang:alpine3.20 as builder

WORKDIR /src

COPY . .
RUN go mod init main
RUN go build main.go

FROM scratch

WORKDIR /src

COPY --from=builder /src/main .

ENTRYPOINT ["./main"]